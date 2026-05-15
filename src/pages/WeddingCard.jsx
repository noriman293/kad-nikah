import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FallingPetals from '../components/wedding/FallingPetals';
import FloatingFlowers from '../components/wedding/FloatingFlowers';
import MusicPlayer from '../components/wedding/MusicPlayer';
import HeroSection from '../components/wedding/HeroSection';
import RevealSection from '../components/wedding/RevealSection';
import InvitationSection from '../components/wedding/InvitationSection';
import TimelineSection from '../components/wedding/TimelineSection';
import CountdownSection from '../components/wedding/CountdownSection';
import GallerySection from '../components/wedding/GallerySection';
import GuestbookSection from '../components/wedding/GuestbookSection';
import DoaSection from '../components/wedding/DoaSection';
import MenuSection from '../components/wedding/MenuSection';
import FloatingNav from '../components/wedding/FloatingNav';

const IMAGES = {
    heroBg: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/942dc2f75_generated_5e8897ad.png',
    flower1: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/b400a034e_generated_9ff9a7ac.png',
    flower2: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/6a3cddb5b_generated_d5df3c54.png',
    floralFrame: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/07b6b6dd1_generated_bf066ee2.png',
    gallery: [
        'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/715da5de1_generated_4ac81f2c.png',
        'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/8f983279e_generated_2da6e01e.png',
        'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/807001918_generated_c66ef058.png',
        'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/0117f4991_generated_151ffff7.png',
    ],
};

export default function WeddingCard() {
    const [isOpened, setIsOpened] = useState(false);
    const [musicPlaying, setMusicPlaying] = useState(false);
    const contentRef = useRef(null);

    const handleOpenCard = () => {
        setIsOpened(true);
        setMusicPlaying(true);
        setTimeout(() => {
            contentRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            {/* Persistent background gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-secondary via-background to-secondary pointer-events-none z-0" />

            {/* Falling petals */}
            <FallingPetals />

            {/* Floating flowers (persistent corners) */}
            <div className="fixed inset-0 pointer-events-none">
                <FloatingFlowers flower1Url={IMAGES.flower1} flower2Url={IMAGES.flower2} />
            </div>

            {/* Music player */}
            <MusicPlayer isPlaying={musicPlaying} setIsPlaying={setMusicPlaying} />

            {/* Hero */}
            <div id="hero">
                <HeroSection bgImage={IMAGES.heroBg} onOpenCard={handleOpenCard} />
            </div>

            {/* Main content */}
            <AnimatePresence>
                {isOpened && (
                    <motion.div
                        ref={contentRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <RevealSection />

                        <InvitationSection />

                        <TimelineSection />

                        <CountdownSection />

                        <GallerySection photos={IMAGES.gallery} />

                        <GuestbookSection />

                        <div id="doa">
                            <DoaSection floralFrameUrl={IMAGES.floralFrame} />
                        </div>

                        <div id="menu">
                            <MenuSection />
                        </div>

                        {/* Footer */}
                        <footer className="text-center py-12 px-4">
                            <p className="font-script text-2xl text-foreground/60">Iman & Pika</p>
                            <p className="font-sans text-xs text-muted-foreground mt-2">
                                19 Disember 2026
                            </p>
                            <div className="h-px w-12 bg-accent/20 mx-auto mt-4" />
                            <p className="font-sans text-[10px] text-muted-foreground/50 mt-4">
                                #ImanPikaForever
                            </p>
                        </footer>

                        {/* Spacer for floating nav */}
                        <div className="h-20" />

                        {/* Floating nav */}
                        <FloatingNav />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}