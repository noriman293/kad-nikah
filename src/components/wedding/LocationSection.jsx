import { MapPin, Navigation } from 'lucide-react';
import AnimatedSection from '@/components/wedding/AnimatedSection';
import GlassCard from '@/components/wedding/GlassCard';
import GoldDivider from '@/components/wedding/GoldDivider';

export default function LocationSection() {
    const venue = 'Lavender Event Space, Skudai';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;
    const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(venue)}`;

    return (
        <div>
            <AnimatedSection className="text-center">
                <p className="font-serif text-base md:text-lg tracking-widest uppercase text-muted-foreground">
                    Lokasi
                </p>
                <GoldDivider />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <GlassCard className="mt-6 text-center">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-serif text-base text-foreground font-medium">{venue}</p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center">
                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/40 border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                        >
                            <MapPin className="w-4 h-4 text-primary" />
                            Google Maps
                        </a>
                        <a
                            href={wazeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/40 border border-white/30 hover:bg-white/60 transition-all font-serif text-sm text-foreground"
                        >
                            <Navigation className="w-4 h-4 text-primary" />
                            Waze
                        </a>
                    </div>
                </GlassCard>
            </AnimatedSection>
        </div>
    );
}