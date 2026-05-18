import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

const events = [
    { time: '10:00 pagi', label: 'Majlis Nikah' },
    { time: '12:00 tengah hari', label: 'Majlis Bermula' },
    { time: '12:30 tengah hari', label: 'Ketibaan Pengantin' },
    { time: '04:30 petang', label: 'Majlis Berakhir' },
];

export default function TimelineSection() {
    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-md mx-auto text-center">
                <AnimatedSection>
                    <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                        Aturcara Majlis
                    </p>
                    <GoldDivider />
                </AnimatedSection>

                <div className="relative mt-10">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

                    {events.map((event, i) => (
                        <AnimatedSection key={i} delay={i * 0.15} className="relative mb-10 last:mb-0">
                            {/* Dot */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40 border-2 border-primary/60 z-10" />

                            <div className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-6`}>
                                <div className="flex-1 text-right">
                                    {i % 2 === 0 ? (
                                        <p className="font-serif text-sm text-primary font-medium">{event.time}</p>
                                    ) : (
                                        <p className="font-serif text-sm md:text-base text-foreground/80">{event.label}</p>
                                    )}
                                </div>
                                <div className="w-3" />
                                <div className="flex-1 text-left">
                                    {i % 2 === 0 ? (
                                        <p className="font-serif text-sm md:text-base text-foreground/80">{event.label}</p>
                                    ) : (
                                        <p className="font-serif text-sm text-primary font-medium">{event.time}</p>
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