import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function RevealSection({ monogramUrl }) {
  return (
    <section className="relative py-24 md:py-32 px-6 flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto">
        <AnimatedSection>
          <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground mb-8">
            Walimatul Urus
          </p>
        </AnimatedSection>

        {/* Pure Image Insert of Monogram */}
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mb-12">
            <img 
              src={monogramUrl} 
              alt="S+I Monogram" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain invert mix-blend-multiply opacity-80"
            />
          </div>
        </AnimatedSection>

        {/* Nama penuh ikut style HeroSection */}
        <AnimatedSection delay={0.4}>
          <p className="mt-6 font-script text-5xl md:text-6xl lg:text-7xl text-foreground">
            Shafika & Iman
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <GoldDivider />
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <p className="font-serif text-base md:text-lg text-muted-foreground tracking-wide">
            Sabtu, 19 Disember 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Lavender Event Space, Skudai
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}