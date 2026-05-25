import { motion } from 'framer-motion';
import GoldDivider from '@/components/wedding/GoldDivider';

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
                    backgroundAttachment: 'fixed',
                    filter: 'blur(6px)',
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

            {/* Content */}
            <div className="relative z-30 text-center px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="font-serif tracking-widest uppercase text-foreground/80 mb-4"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)' }}
                >
                    Walimatul Urus
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    className="font-script text-foreground mb-4"
                    style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
                >
                    Shafika & Iman
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                >
                    <GoldDivider />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="font-serif text-foreground tracking-wider mt-4 font-medium"
                    style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
                >
                    19 Disember 2026
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    whileHover={{ 
                        scale: 1.05, 
                        boxShadow: '0 0 20px rgba(197, 160, 89, 0.3)',
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={onOpenCard}
                    aria-label="Buka Kad Kahwin"
                    className="mt-8 px-8 md:px-10 py-4 rounded-full bg-white/50 backdrop-blur-sm border border-accent/30 font-serif text-sm md:text-base tracking-widest text-foreground hover:bg-white/70 transition-all"
                >
                    Buka Kad
                </motion.button>
            </div>
        </section>
    );
}