import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

const events = [
    { time: '12:00 tengah hari', label: 'Majlis Resepsi Bermula' },
    { time: '12:30 tengah hari', label: 'Ketibaan Pengantin' },
    { time: '1:00 – 2:00 petang', label: 'Sesi Bergambar di Pelamin' },
    { time: '2:00 – 2:15 petang', label: 'Rehat Pengantin' },
    { time: '2:15 petang', label: 'Sesi Potong Kek' },
    { time: '2:30 – 3:15 petang', label: 'Sesi Bergambar' },
    { time: '3:15 – 3:45 petang', label: 'Sesi Santai & Bergambar' },
    { time: '3:45 – 4:00 petang', label: 'Sesi Terakhir' },
    { time: '4:00 petang', label: 'MAJLIS BERSURAI' },
];

export default function TimelineSection() {
    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-md mx-auto text-center">
                <AnimatedSection>
                    <p className="font-serif text-lg md:text-xl tracking-widest uppercase text-foreground/80">
                        Aturcara Majlis
                    </p>
                    <GoldDivider />
                </AnimatedSection>

                <div className="relative mt-10">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

                    {events.map((event, i) => (
                        <AnimatedSection key={i} delay={i * 0.15} className="relative mb-10 last:mb-0">
                            {/* Dot */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60 border-2 border-primary/80 z-10" />

                            <div className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-6`}>
                                <div className="flex-1 text-right">
                                    {i % 2 === 0 ? (
                                        <p className="font-serif text-base text-primary font-bold">{event.time}</p>
                                    ) : (
                                        <p className="font-serif text-base md:text-lg text-foreground font-medium">{event.label}</p>
                                    )}
                                </div>
                                <div className="w-3" />
                                <div className="flex-1 text-left">
                                    {i % 2 === 0 ? (
                                        <p className="font-serif text-base md:text-lg text-foreground font-medium">{event.label}</p>
                                    ) : (
                                        <p className="font-serif text-base text-primary font-bold">{event.time}</p>
                                    )}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}