import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = '/music/selamat-pengantin-baru.mp3';

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(MUSIC_URL);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.3;
        }
    }, []);

    useEffect(() => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.play().catch(() => { });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-md hover:bg-white/60 transition-all"
            aria-label={isPlaying ? 'Mute music' : 'Play music'}
        >
            {isPlaying ? (
                <Volume2 className="w-4 h-4 text-foreground" />
            ) : (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
            )}
        </button>
    );
}