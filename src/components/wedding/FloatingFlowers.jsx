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
        <img
          src={flower1Url}
          alt="flower"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Bottom-right flower */}
      <motion.div
        className="absolute top-4 left-4 w-28 h-28 md:w-40 md:h-40 pointer-events-none z-20 opacity-70 will-change-transform"
        animate={{ y: [0, -12, 0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={flower2Url}
          alt="flower"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>
    </>
  );
}
