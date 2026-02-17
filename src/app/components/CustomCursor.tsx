import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (isMobile) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        // Smooth cursor follow
        const animate = () => {
            // Smooth easing for main cursor
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;

            // Faster easing for dot
            const dotDx = mouseX - dotX;
            const dotDy = mouseY - dotY;
            dotX += dotDx * 0.3;
            dotY += dotDy * 0.3;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Check if hovering over interactive element
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') !== null ||
                target.closest('a') !== null;

            setIsHovering(isInteractive);

            // Magnetic effect for buttons
            if (isInteractive) {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distance = Math.sqrt(
                    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
                );

                if (distance < 100) {
                    const pull = (100 - distance) / 100;
                    mouseX += (centerX - mouseX) * pull * 0.3;
                    mouseY += (centerY - mouseY) * pull * 0.3;
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
            cancelAnimationFrame(animationId);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {/* Main cursor ring */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    marginLeft: '-20px',
                    marginTop: '-20px',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-full h-full rounded-full border-2 border-white/80 bg-gradient-to-br from-teal-400/20 to-purple-400/20" />
            </motion.div>

            {/* Center dot */}
            <motion.div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999]"
                style={{
                    marginLeft: '-4px',
                    marginTop: '-4px',
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-400 to-purple-400" />
            </motion.div>

            {/* Trail effect */}
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
