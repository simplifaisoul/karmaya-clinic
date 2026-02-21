import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    className?: string;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    duration = 0.6,
    className = ""
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Calculate initial offset based on direction — keep small to avoid overflow
    let initialX = 0;
    let initialY = 0;
    if (direction === "up") initialY = 24;
    if (direction === "down") initialY = -24;
    if (direction === "left") initialX = 24;
    if (direction === "right") initialX = -24;

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView
                        ? 'translateX(0px) translateY(0px)'
                        : `translateX(${initialX}px) translateY(${initialY}px)`,
                    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                    willChange: 'opacity, transform'
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
