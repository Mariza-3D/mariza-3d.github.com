import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate page load progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gradient-to-r from-teal-500 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
        />
    );
};

export default LoadingBar;
