import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, useMemo, Suspense, useEffect, Component } from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

// Error boundary
class ErrorBoundary extends Component<
    { children: React.ReactNode; fallback: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children;
    }
}

// Smooth mouse/scroll tracker with elastic easing
const input = { x: 0, y: 0, scroll: 0 };
const current = { x: 0, y: 0, scroll: 0 };
const LERP_FACTOR = 0.05; // Lower = smoother/slower
const SCROLL_LERP = 0.03; // Even smoother for scroll

// Camera orbital controller
const CameraController = () => {
    const { camera } = useThree();
    const radius = 8; // Distance from center
    const centerY = 0; // Look-at point

    useFrame(() => {
        // Smooth lerp toward target scroll
        current.scroll += (input.scroll - current.scroll) * SCROLL_LERP;

        // Map scroll to angle (0 to 2π for full rotation)
        const angle = current.scroll * Math.PI * 2;

        // Calculate camera position in orbit
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const y = 0; // Keep camera level

        camera.position.set(x, y, z);
        camera.lookAt(0, centerY, 0);
    });

    return null;
};

// Single 3D model with floating + mouse interaction
interface FloatingModelProps {
    modelPath: string;
    position: [number, number, number];
    scale: number;
    rotationSpeed: [number, number, number];
    floatSpeed: number;
    floatAmplitude: number;
}

const FloatingModel = ({
    modelPath,
    position,
    scale,
    rotationSpeed,
    floatSpeed,
    floatAmplitude,
}: FloatingModelProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(modelPath);
    const clonedScene = useMemo(() => scene.clone(), [scene]);
    const initialPos = useRef(position);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;

        const t = clock.getElapsedTime();

        // Floating motion (gentle bob)
        const yOffset = Math.sin(t * floatSpeed) * floatAmplitude;
        const xOffset = Math.sin(t * floatSpeed * 0.6 + 2) * floatAmplitude * 0.4;

        // Gentle rotation
        groupRef.current.rotation.y += rotationSpeed[1];
        groupRef.current.rotation.x += rotationSpeed[0];
        groupRef.current.rotation.z += rotationSpeed[2];

        // Camera orbital influence (reduced)
        const dx = current.x * 0.15;
        const dy = -current.y * 0.1;
        groupRef.current.rotation.y += dx;
        groupRef.current.rotation.x += dy;

        // Limits
        const maxTilt = Math.PI / 4; // 45 degrees
        groupRef.current.rotation.x = Math.max(-maxTilt, Math.min(maxTilt, groupRef.current.rotation.x));
    });

    return (
        <RigidBody
            position={position}
            colliders="ball"
            restitution={0.8}
            friction={0.1}
            linearDamping={2}
            angularDamping={1}
            gravityScale={0.1}
        >
            <primitive ref={groupRef} object={clonedScene} scale={scale} />
        </RigidBody>
    );
};

// Scene with models
const ModelsScene = () => {
    // Model configurations - arranged as unified workspace scene
    const models: FloatingModelProps[] = useMemo(
        () => [
            // Center piece - Blender (large, main focus)
            {
                modelPath: '/assets/3d_models/blender_3d_logo_compressed.glb',
                position: [0, 0.3, 0],
                scale: 2.5,
                rotationSpeed: [0.001, 0.003, 0.0005],
                floatSpeed: 0.5,
                floatAmplitude: 0.15,
            },
            // Left - After Effects
            {
                modelPath: '/assets/3d_models/after_effects_ui_compressed.glb',
                position: [-2.2, -0.4, 0.5],
                scale: 0.4,
                rotationSpeed: [0.002, 0.002, 0.001],
                floatSpeed: 0.6,
                floatAmplitude: 0.12,
            },
            // Right - DaVinci Resolve
            {
                modelPath: '/assets/3d_models/davinci_resolve_3d_logo_compressed.glb',
                position: [2, -0.5, 0.8],
                scale: 0.55,
                rotationSpeed: [0.0015, 0.004, 0.001],
                floatSpeed: 0.55,
                floatAmplitude: 0.1,
            },
            // Top - YouTube (smaller accent)
            {
                modelPath: '/assets/3d_models/youtube-logo.glb',
                position: [0.5, 1.8, -0.5],
                scale: 0.5,
                rotationSpeed: [0.003, 0.002, 0.001],
                floatSpeed: 0.7,
                floatAmplitude: 0.18,
            },
            // Bottom left accent - Small Blender
            {
                modelPath: '/assets/3d_models/blender_3d_logo_compressed.glb',
                position: [-1.5, -1.2, 1],
                scale: 0.3,
                rotationSpeed: [0.002, 0.005, 0.0015],
                floatSpeed: 0.65,
                floatAmplitude: 0.1,
            },
        ],
        []
    );

    return (
        <>
            <CameraController />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
            <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#2dd4bf" />
            <pointLight position={[0, 3, 3]} intensity={0.6} color="#ff6b35" />

            {models.map((props, i) => (
                <FloatingModel key={i} {...props} />
            ))}
        </>
    );
};

const Text3DScene = () => {
    // Track mouse + scroll with smooth updates
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            input.x = (e.clientX / window.innerWidth) * 2 - 1;
            input.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        const handleScroll = () => {
            // Map scroll to 0-1 range (normalized scroll progress)
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY / scrollHeight;
            input.scroll = scrolled;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initialize scroll on mount
        handleScroll();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ErrorBoundary fallback={<div />}>
            <div className="w-full h-full">
                <Canvas
                    camera={{ position: [0, 0, 8], fov: 50 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 1.5]}
                    frameloop="always"
                >
                    <Suspense fallback={null}>
                        <Physics gravity={[0, -0.5, 0]} debug={false}>
                            <ModelsScene />
                        </Physics>
                    </Suspense>
                </Canvas>
            </div>
        </ErrorBoundary>
    );
};

export default Text3DScene;
