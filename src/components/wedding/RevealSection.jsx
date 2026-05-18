import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function RevealSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto">
        <AnimatedSection>
          <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
            Walimatul Urus
          </p>
        </AnimatedSection>

        {/* Monogram S atas, I bawah bercantum rapat */}
        <AnimatedSection delay={0.2}>
          <div className="relative inline-block leading-none">
            {/* S */}
            <span className="block font-serif text-[10rem] text-[#6b4e3d]">
              S
            </span>
            {/* I ditolak ke atas supaya sentuh S */}
            <span className="block font-serif text-[10rem] text-[#c5a059] -mt-[7.5rem]">
              I
            </span>
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
