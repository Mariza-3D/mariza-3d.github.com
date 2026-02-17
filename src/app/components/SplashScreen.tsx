import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { motion, AnimatePresence } from 'motion/react';

// Preload all 3D models
const MODEL_PATHS = [
    '/assets/3d_models/blender_3d_logo_compressed.glb',
    '/assets/3d_models/after_effects_ui_compressed.glb',
    '/assets/3d_models/davinci_resolve_3d_logo_compressed.glb',
    '/assets/3d_models/youtube-logo.glb',
];

// Preload models upfront
MODEL_PATHS.forEach((path) => {
    useGLTF.preload(path);
});

interface SplashScreenProps {
    onLoadComplete: () => void;
}

const SplashScreen = ({ onLoadComplete }: SplashScreenProps) => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const TIMEOUT_MS = 15000; // 15 seconds
        const POLLING_INTERVAL = 100; // Check every 100ms
        const startTime = Date.now();
        let loadedCount = 0;
        const totalResources = MODEL_PATHS.length;

        // Simulate progressive loading
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const timeoutProgress = Math.min((elapsed / TIMEOUT_MS) * 100, 100);

            // Count how many models are actually loaded (via useGLTF cache)
            loadedCount = 0;
            MODEL_PATHS.forEach((path) => {
                try {
                    const cached = useGLTF.preload(path);
                    if (cached) loadedCount++;
                } catch {
                    // Not loaded yet
                }
            });

            const resourceProgress = (loadedCount / totalResources) * 100;
            const currentProgress = Math.max(timeoutProgress, resourceProgress);

            setProgress(currentProgress);

            // Complete if all loaded OR timeout reached
            if (currentProgress >= 99.5 || elapsed >= TIMEOUT_MS) {
                setIsLoaded(true);
                clearInterval(interval);
                setTimeout(onLoadComplete, 300); // Small delay for smooth transition
            }
        }, POLLING_INTERVAL);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]"
                >
                    {/* Logo/Title */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-4">
                            <span
                                className="bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent"
                                style={{
                                    textShadow: '0 0 40px rgba(45, 212, 191, 0.3)',
                                }}
                            >
                                3D Анимация
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg">жана YouTube</p>
                    </motion.div>

                    {/* Loading bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="w-full max-w-md px-6"
                    >
                        {/* Progress bar background */}
                        <div className="relative h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                            {/* Progress fill */}
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    boxShadow: '0 0 20px rgba(45, 212, 191, 0.6)',
                                }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        {/* Percentage text */}
                        <motion.p
                            className="text-center text-teal-400 text-sm font-medium mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {Math.round(progress)}%
                        </motion.p>
                    </motion.div>

                    {/* Loading message */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-500 text-sm mt-8"
                    >
                        Жүктөлүүдө...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
