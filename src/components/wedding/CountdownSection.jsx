import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import GoldDivider from './GoldDivider';

const WEDDING_DATE = new Date('2026-12-19T11:00:00+08:00');

function CountdownUnit({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-16 h-20 md:w-20 md:h-24 rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <motion.span
                    key={value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-serif text-2xl md:text-4xl font-bold text-foreground"
                >
                    {String(value).padStart(2, '0')}
                </motion.span>
            </div>
            <p className="font-sans text-xs text-muted-foreground mt-2 tracking-wider uppercase">{label}</p>
        </div>
    );
}

export default function CountdownSection() {
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calc = () => {
            const now = new Date();
            const diff = Math.max(0, WEDDING_DATE - now);
            setTime({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };
        calc();
        const id = setInterval(calc, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-lg mx-auto text-center">
                <AnimatedSection>
                    <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                        Menanti Hari Bahagia
                    </p>
                    <GoldDivider />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="flex justify-center gap-3 md:gap-5 mt-8">
                        <CountdownUnit value={time.days} label="Hari" />
                        <span className="font-serif text-2xl text-accent/60 self-center mb-6">:</span>
                        <CountdownUnit value={time.hours} label="Jam" />
                        <span className="font-serif text-2xl text-accent/60 self-center mb-6">:</span>
                        <CountdownUnit value={time.minutes} label="Minit" />
                        <span className="font-serif text-2xl text-accent/60 self-center mb-6">:</span>
                        <CountdownUnit value={time.seconds} label="Saat" />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}