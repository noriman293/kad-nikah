import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Phone, MapPin, Calendar } from 'lucide-react';
import RSVPForm from './RSVPForm';
import ContactSection from './ContactSection';
import LocationSection from './LocationSection';
import CalendarSection from './CalendarSection';

const tabs = [
    { id: 'rsvp', icon: UserCheck, label: 'RSVP' },
    { id: 'contact', icon: Phone, label: 'Hubungi' },
    { id: 'location', icon: MapPin, label: 'Lokasi' },
    { id: 'calendar', icon: Calendar, label: 'Tarikh' },
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
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-sans transition-all ${isActive
                                        ? 'bg-primary/20 text-foreground border border-primary/30'
                                        : 'bg-white/30 text-muted-foreground border border-white/20 hover:bg-white/50'
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {tab.label}
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