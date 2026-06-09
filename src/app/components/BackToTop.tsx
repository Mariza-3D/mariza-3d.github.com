import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 rounded-full border border-white/20 bg-[#111827]/80 p-4 shadow-xl backdrop-blur-xl transition-all hover:shadow-2xl group"
                    aria-label="Back to top"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60e6d2]/20 to-[#f8c85f]/20 blur transition-all group-hover:blur-md" />
                    <ChevronUp className="w-6 h-6 text-white relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
