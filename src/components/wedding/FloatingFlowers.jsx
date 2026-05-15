import { motion } from 'framer-motion';

export default function FloatingFlowers({ flower1Url, flower2Url }) {
    return (
        <>
            {/* Top-left flower */}
            <motion.div
                className="absolute top-4 left-4 w-28 h-28 md:w-40 md:h-40 pointer-events-none z-20 opacity-70"
                animate={{
                    y: [0, -12, 0, 12, 0],
                    x: [0, 6, 0, -6, 0],
                    rotate: [0, 3, 0, -3, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
                <img src={flower1Url} alt="Decorative flower" className="w-full h-full object-contain drop-shadow-lg" />
            </motion.div>

            {/* Bottom-right flower */}
            <motion.div
                className="absolute bottom-4 right-4 w-24 h-24 md:w-36 md:h-36 pointer-events-none z-20 opacity-60 blur-[0.5px]"
                animate={{
                    y: [0, 10, 0, -10, 0],
                    x: [0, -8, 0, 8, 0],
                    rotate: [0, -4, 0, 4, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                <img src={flower2Url} alt="Decorative flower" className="w-full h-full object-contain drop-shadow-lg" />
            </motion.div>
        </>
    );
}