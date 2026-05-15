import { Home, UserCheck, MapPin, Heart } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Utama', target: 'hero' },
    { icon: UserCheck, label: 'RSVP', target: 'menu' },
    { icon: Heart, label: 'Doa', target: 'doa' },
    { icon: MapPin, label: 'Lokasi', target: 'menu' },
];

export default function FloatingNav() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 px-3 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg">
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <button
                        key={item.label}
                        onClick={() => scrollTo(item.target)}
                        className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-full hover:bg-white/60 transition-all"
                    >
                        <Icon className="w-4 h-4 text-foreground/70" />
                        <span className="text-[9px] font-sans text-muted-foreground">{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}