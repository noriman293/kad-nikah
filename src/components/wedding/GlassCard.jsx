import { cn } from '@/lib/utils';

export default function GlassCard({ children, className }) {
    return (
        <div
            className={cn(
                'backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl shadow-lg',
                'p-6 md:p-10',
                className
            )}
        >
            {children}
        </div>
    );
}