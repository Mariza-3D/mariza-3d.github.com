import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { ChevronLeft, ChevronRight, Rotate3D } from 'lucide-react';
import { motion } from 'motion/react';
import { Suspense, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as THREE from 'three';
import afterEffectsModel from '../../../assets/3d_models/after_effects_ui_compressed.glb';
import blenderModel from '../../../assets/3d_models/blender_3d_logo_compressed.glb';
import davinciModel from '../../../assets/3d_models/davinci_resolve_3d_logo_compressed.glb';
import youtubeModel from '../../../assets/3d_models/youtube-logo.glb';

const MODELS = [
  {
    name: 'Blender',
    path: blenderModel,
    scale: 5.2,
    description: '3D моделдөө жана анимациянын негизги борбору',
  },
  {
    name: 'After Effects',
    path: afterEffectsModel,
    scale: 0.75,
    description: 'Композиция, эффекттер жана финалдык motion polish',
  },
  {
    name: 'DaVinci Resolve',
    path: davinciModel,
    scale: 1.2,
    description: 'Монтаж, түс коррекция жана финалдык экспорт',
  },
  {
    name: 'YouTube',
    path: youtubeModel,
    scale: 0.42,
    description: 'Контент жарыялоо, SEO жана монетизация',
  },
];

interface ModelProps {
  modelPath: string;
  scale: number;
}

const Model = ({ modelPath, scale }: ModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.45) * 0.18;
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.08;
  });

  return <primitive ref={groupRef} object={scene.clone()} scale={scale} />;
};

const ModelViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentModel = MODELS[currentIndex];

  const nextModel = () => setCurrentIndex((prev) => (prev + 1) % MODELS.length);
  const prevModel = () => setCurrentIndex((prev) => (prev - 1 + MODELS.length) % MODELS.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextModel,
    onSwipedRight: prevModel,
    trackMouse: false,
    preventScrollOnSwipe: true,
  });

  return (
    <section id="models" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-kicker">Интерактив</p>
            <h2 className="section-title mt-3">3D Модельдер</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#c4ccd8] lg:justify-self-end">
            Модельдерди айлантып көрүп, курста кандай production дүйнө менен иштей турганыңды биринчи экрандан сез.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#101722] shadow-[0_24px_100px_rgba(0,0,0,0.34)]">
            <div className="model-grid" aria-hidden="true" />
            <div {...handlers} className="relative aspect-[16/10] min-h-[340px]">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1.1} />
                <pointLight position={[-3, 2, 3]} intensity={0.65} color="#2dd4bf" />
                <Suspense fallback={null}>
                  <Model key={currentModel.path} modelPath={currentModel.path} scale={currentModel.scale} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
              </Canvas>

              <button
                type="button"
                onClick={prevModel}
                className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-lg border border-white/10 bg-black/35 text-white backdrop-blur-xl transition-colors hover:bg-white/10"
                aria-label="Previous model"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={nextModel}
                className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-lg border border-white/10 bg-black/35 text-white backdrop-blur-xl transition-colors hover:bg-white/10"
                aria-label="Next model"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <motion.aside
            key={currentModel.name}
            initial={{ y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-white/10 bg-[#111827]/72 p-6 backdrop-blur-2xl"
          >
            <div className="mb-8 grid h-14 w-14 place-items-center rounded-lg bg-[#60e6d2]/12 text-[#bffbf3]">
              <Rotate3D className="h-7 w-7" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8f9bad]">360° көрүү</p>
            <h3 className="mt-3 text-3xl font-black text-[#fff8ed]">{currentModel.name}</h3>
            <p className="mt-4 text-base leading-7 text-[#c4ccd8]">{currentModel.description}</p>

            <div className="mt-8 grid gap-3">
              {MODELS.map((model, index) => (
                <button
                  key={model.name}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-lg border px-4 py-3 text-left text-sm font-bold transition-colors ${
                    index === currentIndex
                      ? 'border-[#60e6d2]/50 bg-[#60e6d2]/12 text-[#dffff9]'
                      : 'border-white/10 bg-white/[0.035] text-[#d8deea] hover:bg-white/[0.07]'
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;
