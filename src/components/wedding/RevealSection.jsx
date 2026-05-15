import AnimatedSection from './AnimatedSection';
import GoldDivider from './GoldDivider';

export default function RevealSection() {
    return (
        <section className="relative py-24 md:py-32 px-6 flex items-center justify-center">
            <div className="text-center max-w-lg mx-auto">
                <AnimatedSection>
                    <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                        Walimatul Urus
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <h2 className="font-script text-4xl md:text-6xl text-foreground mt-4">
                        Shafika & Iman
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                    <GoldDivider />
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <p className="font-serif text-base md:text-lg text-muted-foreground tracking-wide">
                        Sabtu, 19 Disember 2026
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                    <p className="font-sans text-sm text-muted-foreground mt-2">
                        Lavender Event Space, Skudai
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}