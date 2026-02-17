import { ChevronDown, ChevronRight, Play, Sparkles } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

const Hero = () => {
    // Optimization: Use MotionValues instead of State to prevent re-renders on mouse move
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const springConfig = { stiffness: 100, damping: 30 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute top-20 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute bottom-20 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
                style={{ y: y2 }}
            />

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Kinetic Typography & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ opacity }}
                        className="relative z-10"
                    >
                        <div className="mb-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                                <div className="block mb-2 whitespace-nowrap">
                                    <span className="text-white" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,107,53,0.6)' }}>
                                        3D Анимация
                                    </span>
                                </div>
                                <div className="block whitespace-nowrap">
                                    <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                        жана YouTube
                                    </span>
                                </div>
                            </h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
                        >
                            Өзүңдүн каармандарыңды жаратып, YouTube дан акча тап
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(45, 212, 191, 0.5)' }}
                                whileTap={{ scale: 0.98 }}
                                className="relative px-10 py-5 rounded-3xl text-lg font-bold bg-gradient-to-r from-teal-400 to-teal-500 text-gray-900 shadow-2xl overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Курска жазылуу <ChevronRight className="w-5 h-5" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
                                    initial={{ x: '100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-10 py-5 rounded-3xl text-lg font-semibold border-2 border-teal-400/50 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all"
                            >
                                Демо көрүү
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Enhanced 3D Viewer with Mouse Follow (Optimized) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative perspective-1000"
                    >
                        <motion.div
                            className="relative aspect-square max-w-[500px] lg:max-w-[600px] mx-auto"
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Glassmorphism container */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden transform-style-3d">
                                {/* 3D Interactive viewer placeholder */}
                                <div className="w-full h-full relative group">
                                    <div className="absolute inset-0 p-8">
                                        <img
                                            src="https://images.unsplash.com/photo-1698078038619-7f94733f9413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFuaW1hdGlvbiUyMGNoYXJhY3RlciUyMGNyZWF0b3IlMjBkZXNrdG9wJTIwd29ya3NwYcGVufDF8fHx8MTc3MTIzNzE3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="3D Character"
                                            className="w-full h-full object-cover rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 to-transparent rounded-3xl">
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Play className="w-20 h-20 text-white opacity-80" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating elements around 3D viewer */}
                                <motion.div
                                    className="absolute top-6 right-6 px-4 py-2 rounded-2xl bg-teal-400/90 backdrop-blur-sm text-gray-900 font-bold text-sm shadow-lg z-20"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Sparkles className="w-4 h-4 inline mr-1" /> Интерактивдүү
                                </motion.div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-teal-400/20 to-purple-400/20 blur-3xl -z-10" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="text-center mt-6 text-gray-400 text-sm"
                        >
                            Айланткыла жана zoom кылгыла
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 text-teal-400/60" />
            </motion.div>
        </section>
    );
};

export default Hero;
