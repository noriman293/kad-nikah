import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FallingPetals from '@/components/wedding/FallingPetals';
import FloatingButterflies from '@/components/wedding/FloatingButterflies';
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
import Footer from '@/components/wedding/Footer';


const IMAGES = {
  heroBg: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/942dc2f75_generated_5e8897ad.png',
  flower1: '/image/sakura.svg',
  flower2: '/image/sakura.svg',
  floralFrame: 'https://media.base44.com/images/public/69d4a417a8942610f2bb96f1/07b6b6dd1_generated_bf066ee2.png',
  monogram: '/image/mono.png', 
  gallery: [
    '/image/photo1.jpg',
    '/image/photo2.jpg',
    '/image/photo3.jpg',
    '/image/photo4.jpg',
    '/image/photo5.jpg',  
    '/image/photo6.jpg',      
    '/image/photo7.jpg',
  ],
};

export default function WeddingCard() {
  const [isOpened, setIsOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const invitationRef = useRef(null);

  useEffect(() => {
    document.title = "Walimatul Urus Balkis Shafika & Mohamad Nor Iman";
  }, []);

  const handleOpenCard = () => {
    setIsOpened(true);
    setMusicPlaying(true);
  };

  // ✅ Auto scroll bila kad dibuka ke bahagian Walimatul Urus (RevealSection)
  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        const element = document.getElementById('reveal');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-secondary via-background to-secondary pointer-events-none z-0" />

      <FallingPetals />
      <FloatingButterflies />
      
      <div className="fixed inset-0 pointer-events-none">
        <FloatingFlowers flower1Url={IMAGES.flower1} flower2Url={IMAGES.flower2} />
      </div>

      <MusicPlayer isPlaying={musicPlaying} setIsPlaying={setMusicPlaying} />

      {/* Hero */}
      <div id="hero">
        <HeroSection bgImage={IMAGES.heroBg} onOpenCard={handleOpenCard} />
      </div>

      {/* Main content */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div id="reveal">
              <RevealSection monogramUrl={IMAGES.monogram} />
            </div>
            <InvitationSection />
            <TimelineSection />
            <CountdownSection />
            
            <div id="gallery">
              <GallerySection photos={IMAGES.gallery} />
            </div>
            
            <div id="guestbook">
              <GuestbookSection />
            </div>
            
            <div id="doa">
              <DoaSection floralFrameUrl={IMAGES.floralFrame} />
            </div>
            
            <div id="menu">
              <MenuSection />
            </div>
            
            <div className="h-20" /> {/* spacer */}
            <FloatingNav />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
