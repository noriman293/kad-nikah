import { Phone } from 'lucide-react';
import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function ContactSection() {
    return (
        <div>
            <AnimatedSection className="text-center">
                <p className="font-serif text-lg md:text-xl tracking-widest uppercase text-foreground/80">
                    Hubungi Kami
                </p>
                <GoldDivider />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center px-4">
                    <a
                        href="https://wa.me/+60108889711"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hubungi Sunaryati di WhatsApp"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                    >
                        <Phone className="w-5 h-5 text-primary" />
                        Sunaryati
                    </a>
                    <a
                        href="https://wa.me/+601120649311"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hubungi Sulaima di WhatsApp"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                    >
                        <Phone className="w-5 h-5 text-primary" />
                        Sulaima
                    </a>
                    <a
                        href="https://wa.me/+601126928423"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hubungi Aidil Shafiq di WhatsApp"
                        className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                    >
                        <Phone className="w-5 h-5 text-primary" />
                        Aidil Shafiq
                    </a>
                </div>
            </AnimatedSection>
        </div>
    );
}