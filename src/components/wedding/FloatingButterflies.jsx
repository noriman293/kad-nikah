import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Butterfly = ({ id, delay, startX, duration, size, color }) => {
    return (
        <motion.div
            className="fixed pointer-events-none z-[999]"
            initial={{ 
                x: startX, 
                y: '110vh', 
                rotate: 0, 
                opacity: 0,
                scale: 0.5 
            }}
            animate={{
                y: '-20vh',
                x: [startX, startX + 150, startX - 120, startX + 80],
                rotate: [0, 45, -45, 0],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.5, 1.2, 1.2, 0.5]
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <div className="relative" style={{ width: size, height: size }}>
                {/* Real Butterfly Wing Shape using SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <motion.path
                        d="M50 50 C50 50 10 20 10 40 C10 60 40 70 50 50"
                        fill={color}
                        animate={{ rotateY: [0, 80, 0] }}
                        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ originX: "100%" }}
                    />
                    <motion.path
                        d="M50 50 C50 50 90 20 90 40 C90 60 60 70 50 50"
                        fill={color}
                        animate={{ rotateY: [0, -80, 0] }}
                        transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ originX: "0%" }}
                    />
                </svg>
            </div>
        </motion.div>
    );
};

export default function FloatingButterflies() {
    const [butterflies, setButterflies] = useState([]);
    const colors = ['#fbcfe8', '#fce7f3', '#ddd6fe', '#e0e7ff', '#fae8ff', '#fef3c7'];

    useEffect(() => {
        const count = 20; // Lebih banyak rama-rama
        const newButterflies = Array.from({ length: count }, (_, i) => ({
            id: i,
            delay: Math.random() * 15,
            startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            duration: 12 + Math.random() * 10,
            size: 20 + Math.random() * 25, // Saiz lebih besar sikit
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setButterflies(newButterflies);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
            {butterflies.map((b) => (
                <Butterfly key={b.id} {...b} />
            ))}
        </div>
    );
}
