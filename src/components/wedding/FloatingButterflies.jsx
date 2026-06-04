import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Butterfly from './Butterfly';

export default function FloatingButterflies({ count = 8 }) {
  const [butterflies, setButterflies] = useState([8]);
  const colors = ['#fbcfe8', '#fce7f3', '#ddd6fe', '#e0e7ff', '#fae8ff', '#fef3c7'];

  useEffect(() => {
    const newButterflies = Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 5, // lebih cepat nampak
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      duration: 12 + Math.random() * 10,
      size: 20 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setButterflies(newButterflies);
  }, [count]); // re-run bila count berubah

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
      {butterflies.map((b) => (
        <Butterfly key={b.id} {...b} />
      ))}
    </div>
  );
}

