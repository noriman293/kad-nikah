import { motion } from 'framer-motion';

const Butterfly = ({ id, delay, startX, duration, size }) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-[999]"
      initial={{ 
        x: startX, 
        y: '110vh', 
        opacity: 0,
        scale: 0.5 
      }}
      animate={{
        y: '-20vh',
        x: [startX, startX + 150, startX - 120, startX + 80],
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
      {/* Kepak bergerak */}
      <motion.img
        src="/image/rama2.svg"
        width={size}
        height={size}
        className="drop-shadow-md opacity-90"
        animate={{ rotateZ: [0, 10, -10, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Butterfly;
