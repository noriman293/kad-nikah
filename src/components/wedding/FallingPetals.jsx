import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Petal = ({ delay, startX, duration }) => (
    <motion.div
        className="fixed pointer-events-none z-10"
        initial={{ x: startX, y: -20, rotate: 0, opacity: 0.4 }}
        animate={{
            y: '105vh',
            x: [startX, startX + 60, startX - 40, startX + 30],
            rotate: [0, 180, 360, 540],
            opacity: [0.4, 0.3, 0.25, 0],
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'linear',
        }}
    >
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <ellipse cx="6" cy="7" rx="5" ry="6.5" fill="hsl(348, 50%, 82%)" opacity="0.6" />
        </svg>
    </motion.div>
);

export default function FallingPetals() {
    const [petals] = useState(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            delay: Math.random() * 8,
            startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
            duration: 10 + Math.random() * 8,
        }))
    );

    return (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
            {petals.map((p) => (
                <Petal key={p.id} delay={p.delay} startX={p.startX} duration={p.duration} />
            ))}
        </div>
    );
}