import { Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GoldDivider from './GoldDivider';

export default function ContactSection() {
    return (
        <div>
            <AnimatedSection className="text-center">
                <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                    Hubungi Kami
                </p>
                <GoldDivider />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
                    <a
                        href="https://wa.me/+60108889711"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        Sunaryati
                    </a>
                    <a
                        href="https://wa.me/+601120649311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        Sulaima
                    </a>
                    <a
                        href="https://wa.me/+601126928423"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        Aidil Shafiq
                    </a>
                </div>
            </AnimatedSection>
        </div>
    );
}