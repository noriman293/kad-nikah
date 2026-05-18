import { Calendar } from 'lucide-react';
import AnimatedSection from '@/components/wedding/AnimatedSection';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function CalendarSection() {
    const eventTitle = 'Walimatul Urus - Iman & Pika';
    const location = 'Lavender Event Space, Skudai';
    const startDate = '20261219T030000Z'; // 11:00 AM MYT = 3:00 AM UTC
    const endDate = '20261219T080000Z';   // 4:00 PM MYT = 8:00 AM UTC

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(location)}&details=${encodeURIComponent('Majlis Walimatul Urus Iman & Pika')}`;

    const appleCalUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(
        `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${startDate}\nDTEND:${endDate}\nSUMMARY:${eventTitle}\nLOCATION:${location}\nDESCRIPTION:Majlis Walimatul Urus Iman & Pika\nEND:VEVENT\nEND:VCALENDAR`
    )}`;

    return (
        <div>
            <AnimatedSection className="text-center">
                <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                    Simpan Tarikh
                </p>
                <GoldDivider />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <div className="mt-6 text-center">
                    <p className="font-serif text-sm text-foreground/80 mb-4">Sabtu, 19 Disember 2026</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={googleCalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                        >
                            <Calendar className="w-4 h-4 text-primary" />
                            Google Calendar
                        </a>
                        <a
                            href={appleCalUrl}
                            download="iman-pika-wedding.ics"
                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                        >
                            <Calendar className="w-4 h-4 text-primary" />
                            Apple Calendar
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}