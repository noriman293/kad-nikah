import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Phone, MapPin, Calendar } from 'lucide-react';
import RSVPForm from '@/components/wedding/RSVPForm';
import ContactSection from '@/components/wedding/ContactSection';
import LocationSection from '@/components/wedding/LocationSection';
import CalendarSection from '@/components/wedding/CalendarSection';

const tabs = [
    { id: 'rsvp', icon: UserCheck, label: 'RSVP', color: 'text-green-500' },
    { id: 'contact', icon: Phone, label: 'Hubungi', color: 'text-blue-500' },
    { id: 'location', icon: MapPin, label: 'Lokasi', color: 'text-red-500' },
    { id: 'calendar', icon: Calendar, label: 'Tarikh', color: 'text-amber-500' },
];

export default function MenuSection() {
    const [activeTab, setActiveTab] = useState('rsvp');

    return (
        <section className="relative py-20 md:py-28 px-4">
            <div className="max-w-lg mx-auto">
                {/* Tab navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                aria-label={`Buka tab ${tab.label}`}
                                className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-sans transition-all ${isActive
                                        ? 'bg-primary/20 text-foreground border border-primary/30'
                                        : 'bg-white/30 text-muted-foreground border border-white/20 hover:bg-white/50'
                                    }`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${tab.color}`} />
                                {tab.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-primary rounded-full"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === 'rsvp' && <RSVPForm />}
                        {activeTab === 'contact' && <ContactSection />}
                        {activeTab === 'location' && <LocationSection />}
                        {activeTab === 'calendar' && <CalendarSection />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}