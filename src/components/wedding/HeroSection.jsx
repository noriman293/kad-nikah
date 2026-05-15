import { motion } from 'framer-motion';
import GoldDivider from './GoldDivider';

export default function HeroSection({ bgImage, onOpenCard }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

            {/* Content */}
            <div className="relative z-30 text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground mb-4"
                >
                    Walimatul Urus
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="font-script text-5xl md:text-7xl lg:text-8xl text-foreground mb-2"
                >
                    Shafika & Iman
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.0 }}
                >
                    <GoldDivider />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="font-serif text-sm md:text-base text-muted-foreground tracking-wider mt-2"
                >
                    19 Disember 2026
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(197, 160, 89, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenCard}
                    className="mt-8 px-10 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-accent/30 font-serif text-sm md:text-base tracking-widest text-foreground hover:bg-white/70 transition-all"
                >
                    Buka Kad
                </motion.button>
            </div>
        </section>
    );
}