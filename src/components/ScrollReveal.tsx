import { useRef } from 'react';
import { motion, useInView, useAnimation, type Variant } from 'framer-motion';
import { useEffect } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    className?: string;
    staggerChildren?: number;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    duration = 0.5,
    className = "",
    staggerChildren = 0
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = (): { hidden: Variant, visible: Variant } => {
        let hidden: any = { opacity: 0 };
        const visible: any = {
            opacity: 1,
            transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: staggerChildren
            }
        };

        if (direction === "up") hidden = { ...hidden, y: 30 };
        if (direction === "down") hidden = { ...hidden, y: -30 };
        if (direction === "left") hidden = { ...hidden, x: 20 };
        if (direction === "right") hidden = { ...hidden, x: -20 };

        return { hidden, visible };
    };

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
};
