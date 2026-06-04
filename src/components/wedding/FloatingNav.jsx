import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, UserCheck, MapPin, Heart, Share2 } from 'lucide-react';
import { toast } from 'sonner';

const navItems = [
  { icon: Home, label: 'Utama', target: 'hero', color: 'text-rose-400', aria: 'Pergi ke halaman utama' },
  { icon: UserCheck, label: 'RSVP', target: 'menu', color: 'text-emerald-400', aria: 'Buka borang RSVP' },
  { icon: Heart, label: 'Doa', target: 'doa', color: 'text-pink-400', aria: 'Baca ucapan doa' },
  { icon: MapPin, label: 'Lokasi', target: 'menu', color: 'text-amber-400', aria: 'Lihat lokasi majlis' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // Jika id adalah 'hero', scroll ke paling atas
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
        // Jika element tidak dijumpai (mungkin dalam AnimatePresence), cuba lagi sekejap
        setTimeout(() => {
            const el = document.getElementById(id);
            if (id === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Walimatul Urus Balkis Shafika & Mohamad Nor Iman',
      text: 'Assalamualaikum WBT. Jemputan Walimatul Urus Balkis Shafika & Mohamad Nor Iman pada 19 Disember 2026. Sila klik link untuk maklumat lanjut:',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n\n${shareData.url}`);
        toast.success('Link & jemputan telah disalin!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center z-50">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-0.5 px-3 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-fit"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.target;
          return (
            <motion.button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={item.aria}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all"
            >
              <Icon className={`w-4 h-4 ${isActive ? item.color : 'text-foreground/60'}`} />
              <span className={`text-[9px] font-sans ${isActive ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-accent/60 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}

        <div className="w-px h-6 bg-white/30 mx-1" />

        <motion.button
          onClick={handleShare}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Kongsi jemputan ke WhatsApp"
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-full transition-all text-emerald-500"
        >
          <Share2 className="w-4 h-4" />
          <span className="text-[9px] font-sans font-medium">Kongsi</span>
        </motion.button>
      </motion.nav>
    </div>
  );
}
