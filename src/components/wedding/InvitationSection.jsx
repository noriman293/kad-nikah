import AnimatedSection from '@/components/wedding/AnimatedSection';
import GlassCard from '@/components/wedding/GlassCard';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function InvitationSection() {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <div id="invitation-card" className="max-w-xl mx-auto">
        <AnimatedSection>
          <GlassCard className="text-center">
            {/* Salam pembuka */}
            <p className="font-serif text-base md:text-lg text-foreground/90 italic leading-relaxed">
              Assalamualaikum WBT & Salam Sejahtera
            </p>

            <GoldDivider />

            {/* Nama ibu & bapa */}
            <div className="mt-4">
              <p className="font-serif text-lg md:text-xl text-foreground font-semibold">
                Puan Sulaima binti Sulaimi
              </p>
              <p className="font-script text-4xl md:text-5xl text-accent my-2">
                &
              </p>
              <p className="font-serif text-lg md:text-xl text-foreground font-semibold">
                Muhammad Aidil Shafiq Bin Rusdi (Abang)
              </p>
              <p className="font-serif text-base md:text-lg text-foreground mt-3">
                sekeluarga dengan penuh kesyukuran mempersilakan
              </p>
            </div>

            <GoldDivider className="my-6" />

            {/* Ayat jemputan */}
            <p className="font-serif text-base md:text-lg text-foreground leading-loose mt-4">
              <span className="text-foreground/70 font-medium">
                Dato'/Datin/Dr./Tuan/Puan/Encik/Cik
              </span>
              <br />
              ke majlis walimatul urus anakanda kesayangan kami:
            </p>

            {/* Nama pengantin */}
            <h3 className="font-script text-4xl md:text-5xl text-foreground mt-8 mb-8">
              Balkis Shafika
              <br />
              <span className="text-accent">&</span>
              <br />
              Mohamad Nor Iman
            </h3>

            <GoldDivider />

            {/* Maklumat majlis */}
            <div className="space-y-3 mt-6">
              <p className="font-serif text-base md:text-lg text-foreground">
                <span className="text-primary font-bold">Tarikh:</span> Sabtu, 19 Disember 2026
              </p>
              <p className="font-serif text-base md:text-lg text-foreground">
                <span className="text-primary font-bold">Masa:</span> 12:00 tengah hari – 04:30 petang   
              </p>
              <p className="font-serif text-base md:text-lg text-foreground">
                <span className="text-primary font-bold">Tempat:</span> Lavender Event Space, Skudai
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
