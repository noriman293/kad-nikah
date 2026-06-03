import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FallingPetals from '@/components/wedding/FallingPetals';
import FloatingFlowers from '@/components/wedding/FloatingFlowers';
import MusicPlayer from '@/components/wedding/MusicPlayer';
import HeroSection from '@/components/wedding/HeroSection';
import RevealSection from '@/components/wedding/RevealSection';
import InvitationSection from '@/components/wedding/InvitationSection';
import TimelineSection from '@/components/wedding/TimelineSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import GallerySection from '@/components/wedding/GallerySection';
import GuestbookSection from '@/components/wedding/GuestbookSection';
import DoaSection from '@/components/wedding/DoaSection';
import MenuSection from '@/components/wedding/MenuSection';
import FloatingNav from '@/components/wedding/FloatingNav';
import Footer from '@/components/wedding/Footer'; // ✅ guna footer component

const IMAGES = {
  heroBg: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/942dc2f75_generated_5e8897ad.png',
  flower1: 'dist/image/image1.png',
  flower2: 'dist/image/image1.png',
  floralFrame: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/07b6b6dd1_generated_bf066ee2.png',
  monogram: 'dist/image/photo1.png',
  gallery: [
    '/image/photo1.jpg',
    '/image/photo2.jpg',
    '/image/photo3.jpg',
    '/image/photo4.jpg',
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

  useEffect(() => {
    document.title = "Walimatul Urus Balkis Shafika & Mohamad Nor Iman";
  }, []);

  const handleOpenCard = () => {
    setIsOpened(true);
    setMusicPlaying(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-secondary via-background to-secondary pointer-events-none z-0" />

      {/* Falling petals */}
      <FallingPetals />

      {/* Floating flowers */}
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
            <RevealSection monogramUrl={IMAGES.monogram} />
        
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

            <div className="h-20" /> {/* spacer */}
            <FloatingNav />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
