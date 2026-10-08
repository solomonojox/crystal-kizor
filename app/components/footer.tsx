export default function Footer() {
    return (
        <footer className="py-10 lg:py-12 bg-charcoal border-t border-warm-50/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="font-display text-base tracking-tight text-warm-50/60">
                    Crystal Kizor
                </p>
                <p className="text-xs text-warm-200/30 tracking-wide">
                    Architect · Designer · Entrepreneur · Speaker
                </p>
                <p className="text-xs text-warm-200/30">
                    © 2026
                </p>
            </div>
        </footer>
    );
}