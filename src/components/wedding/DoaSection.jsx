import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function DoaSection({ floralFrameUrl }) {
    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-lg mx-auto">
                <AnimatedSection className="text-center">
                    <p className="font-serif text-lg md:text-xl tracking-widest uppercase text-foreground/80">
                        Doa Restu
                    </p>
                    <GoldDivider />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <div className="relative mt-8">
                        {/* Floral frame background */}
                        <img
                            src={floralFrameUrl}
                            alt="Floral frame"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40"
                        />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 rounded-2xl" />

                        <div className="relative p-8 md:p-12 text-center">
                            <p className="font-serif text-base md:text-lg text-foreground leading-loose italic font-medium">
                                Ya Allah, berkatilah majlis perkahwinan ini, limpahkan baraqah dan rahmat kepada kedua
                                mempelai ini. Kurniakanlah mereka zuriat yang soleh dan solehah. Kekalkanlah jodoh
                                mereka di dunia dan di akhirat, serta sempurnakanlah agama mereka dengan berkat ikatan
                                ini.
                            </p>
                            <p className="font-serif text-base md:text-lg text-primary mt-6 font-semibold">Aamiin Ya Rabbal Aalamiin</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}