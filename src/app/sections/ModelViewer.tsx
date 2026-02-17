import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSwipeable } from 'react-swipeable';
import * as THREE from 'three';

// Model configurations
const MODELS = [
    {
        name: 'Blender',
        path: '/assets/3d_models/blender_3d_logo_compressed.glb',
        scale: 5.5,
        description: '3D моделдөө жана анимация',
    },
    {
        name: 'After Effects',
        path: '/assets/3d_models/after_effects_ui_compressed.glb',
        scale: 0.75,
        description: 'Видео композиция жана эффекттер',
    },
    {
        name: 'DaVinci Resolve',
        path: '/assets/3d_models/davinci_resolve_3d_logo_compressed.glb',
        scale: 1.2,
        description: 'Видео монтаж жана түс коррекция',
    },
    {
        name: 'YouTube',
        path: '/assets/3d_models/youtube-logo.glb',
        scale: 0.4,
        description: 'Контент жарыялоо',
    },
];

interface ModelProps {
    modelPath: string;
    scale: number;
}

const Model = ({ modelPath, scale }: ModelProps) => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(modelPath);

    // Optional auto-rotation (commented out by default)
    useFrame(() => {
        if (!groupRef.current) return;

        // Uncomment below to enable auto-rotation
        // groupRef.current.rotation.y += 0.005;
    });

    return <primitive ref={groupRef} object={scene.clone()} scale={scale} />;
};

const ModelViewer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextModel = () => {
        setCurrentIndex((prev) => (prev + 1) % MODELS.length);
    };

    const prevModel = () => {
        setCurrentIndex((prev) => (prev - 1 + MODELS.length) % MODELS.length);
    };

    // Touch/swipe gesture handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => nextModel(),
        onSwipedRight: () => prevModel(),
        trackMouse: false, // Only track touch, not mouse
        preventScrollOnSwipe: true,
    });

    const currentModel = MODELS[currentIndex];

    return (
        <section id="models" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradient */}
            <motion.div
                className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6"
                >
                    <span className="bg-gradient-to-r from-white via-teal-200 to-purple-200 bg-clip-text text-transparent">
                        3D Модельдер
                    </span>
                </motion.h2>
                <p className="text-center text-gray-400 mb-16 text-lg">
                    Интерактивдүү 360° көрүү
                </p>

                <div className="max-w-5xl mx-auto">
                    <div className="glass rounded-3xl p-8 relative">
                        {/* 3D Canvas */}
                        <div {...handlers} className="aspect-video bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl mb-6 relative overflow-hidden">
                            <Canvas
                                camera={{ position: [0, 0, 5], fov: 45 }}
                                gl={{ antialias: true, alpha: true }}
                            >
                                <ambientLight intensity={0.6} />
                                <directionalLight position={[5, 5, 5]} intensity={1} />
                                <pointLight position={[-3, 2, 3]} intensity={0.5} color="#2dd4bf" />

                                <Suspense fallback={null}>
                                    <AnimatePresence mode="wait">
                                        <Model
                                            key={currentModel.path}
                                            modelPath={currentModel.path}
                                            scale={currentModel.scale}
                                        />
                                    </AnimatePresence>
                                </Suspense>

                                {/* OrbitControls for 360° rotation */}
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate={false}
                                    autoRotateSpeed={2}
                                // Set autoRotate={true} above to enable auto-rotation
                                />
                            </Canvas>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevModel}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all"
                                aria-label="Previous model"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextModel}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all"
                                aria-label="Next model"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Model Info */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentModel.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-center"
                            >
                                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                                    {currentModel.name}
                                </h3>
                                <p className="text-gray-400">{currentModel.description}</p>
                                <div className="flex justify-center gap-2 mt-4">
                                    {MODELS.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                                ? 'bg-teal-400 w-8'
                                                : 'bg-gray-600 hover:bg-gray-500'
                                                }`}
                                            aria-label={`View model ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Hint */}
                        <p className="text-center text-gray-500 text-sm mt-6">
                            💡 Модельди чычкан менен буруп көрүңүз
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModelViewer;
