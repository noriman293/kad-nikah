import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function GallerySection({ photos }) {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);

    const next = () => setCurrent((c) => (c + 1) % photos.length);
    const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-lg mx-auto text-center">
                <AnimatedSection>
                    <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                        Galeri
                    </p>
                    <GoldDivider />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="relative mt-8 overflow-hidden rounded-2xl shadow-lg" ref={containerRef}>
                        <div className="relative aspect-[3/4]">
                            {photos.map((photo, i) => (
                                <motion.img
                                    key={i}
                                    src={photo}
                                    alt={`Gallery photo ${i + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                                    initial={false}
                                    animate={{
                                        opacity: i === current ? 1 : 0,
                                        scale: i === current ? 1 : 1.05,
                                    }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                                />
                            ))}
                        </div>

                        {/* Navigation */}
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/60 transition-all"
                        >
                            <ChevronLeft className="w-4 h-4 text-foreground" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/60 transition-all"
                        >
                            <ChevronRight className="w-4 h-4 text-foreground" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {photos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}