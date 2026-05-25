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

    const outlookCalUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventTitle)}&startdt=${startDate}&enddt=${endDate}&location=${encodeURIComponent(location)}&body=${encodeURIComponent('Majlis Walimatul Urus Iman & Pika')}`;

    return (
        <div>
            <AnimatedSection className="text-center">
                <p className="font-serif text-lg md:text-xl tracking-widest uppercase text-foreground/80">
                    Simpan Tarikh
                </p>
                <GoldDivider />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <div className="mt-6 text-center">
                    <p className="font-serif text-base md:text-lg text-foreground font-medium mb-6">Sabtu, 19 Disember 2026</p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center px-4">
                        <a
                            href={googleCalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Simpan tarikh ke Google Calendar"
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            Google Calendar
                        </a>
                        <a
                            href={appleCalUrl}
                            download="iman-pika-wedding.ics"
                            aria-label="Simpan tarikh ke Apple Calendar"
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            Apple Calendar
                        </a>
                        <a
                            href={outlookCalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Simpan tarikh ke Outlook Calendar"
                            className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 transition-all font-serif text-base text-foreground shadow-sm"
                        >
                            <Calendar className="w-5 h-5 text-primary" />
                            Outlook Calendar
                        </a>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}