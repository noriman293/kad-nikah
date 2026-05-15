import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import GoldDivider from './GoldDivider';

export default function InvitationSection() {
    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-xl mx-auto">
                <AnimatedSection>
                    <GlassCard className="text-center">
                        {/* Salam pembuka */}
                        <p className="font-serif text-sm md:text-base text-muted-foreground italic leading-relaxed">
                            Assalamualaikum WBT & Salam Sejahtera
                        </p>

                        <GoldDivider />

                        {/* Nama ibu & bapa */}
                        <div className="mt-4">
  <p className="font-serif text-base md:text-lg text-foreground font-medium">
    Puan Sulaima binti Sulaimi
  </p>
  <p className="font-script text-3xl md:text-4xl text-accent my-1">
    &
  </p>
  <p className="font-serif text-base md:text-lg text-foreground font-medium">
    Encik Muhammad Aidil Shafiq Bin Rusdi
  </p>
  <p className="font-serif text-sm md:text-base text-foreground/80 mt-2">
    sekeluarga dengan penuh kesyukuran mempersilakan
  </p>
</div>


                        <GoldDivider className="my-6" />

                        {/* Ayat jemputan */}
                        <p className="font-serif text-sm md:text-base text-foreground/80 leading-loose mt-4">
                            <span className="text-muted-foreground">
                                Dato'/Datin/Dr./Tuan/Puan/Encik/Cik
                            </span>
                            <br />
                            ke majlis walimatul urus anakanda kesayangan kami:
                        </p>

                        {/* Nama pengantin */}
                        <h3 className="font-script text-3xl md:text-4xl text-foreground mt-6 mb-6">
                            Balkis Shafika
                            <br />
                            <span className="text-accent">&</span>
                            <br />
                            Mohamad Nor Iman
                        </h3>

                        <GoldDivider />

                        {/* Maklumat majlis */}
                        <div className="space-y-2 mt-4">
                            <p className="font-serif text-sm md:text-base text-foreground/80">
                                <span className="text-primary font-medium">Tarikh:</span> Sabtu, 19 Disember 2026
                            </p>
                            <p className="font-serif text-sm md:text-base text-foreground/80">
                                <span className="text-primary font-medium">Masa:</span> 12:30 tengah hari – 05:00 petang   
                            </p>
                            <p className="font-serif text-sm md:text-base text-foreground/80">
                                <span className="text-primary font-medium">Tempat:</span> Lavender Event Space, Skudai
                            </p>
                        </div>
                    </GlassCard>
                </AnimatedSection>
            </div>
        </section>
    );
}
