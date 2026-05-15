export default function GoldDivider() {
    return (
        <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-12 bg-accent/40" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="hsl(40, 50%, 55%)" opacity="0.6" />
            </svg>
            <div className="h-px w-12 bg-accent/40" />
        </div>
    );
}