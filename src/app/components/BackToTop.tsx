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
                    className="fixed bottom-8 right-8 z-40 p-4 rounded-full glass border border-white/20 shadow-xl hover:shadow-2xl transition-all group"
                    aria-label="Back to top"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-400/20 rounded-full blur group-hover:blur-md transition-all" />
                    <ChevronUp className="w-6 h-6 text-white relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
