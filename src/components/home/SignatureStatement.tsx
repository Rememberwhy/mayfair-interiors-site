'use client';

export default function SignatureStatement() {
  return (
    <section className="relative isolate bg-gradient-to-br from-[#eae4dc] via-[#d8b394] to-[#f4ede6] px-4 md:px-6 pt-20 pb-32 overflow-hidden will-change-transform">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-20 md:gap-28 relative z-10">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight leading-tight text-[#2c241f]">
            Spaces with Soul.
          </h2>
          <p className="text-base md:text-lg text-[#473e37] leading-relaxed max-w-xl">
            At Mayfair Interiors, we don’t just design rooms — we sculpt atmosphere.
            Each surface, silhouette, and shadow is selected with precision, grounded in 
            craftsmanship and quiet confidence.
          </p>
          <div>
            <a
              href="/about"
              className="inline-block px-6 py-3 rounded-full bg-[#2c241f] text-white font-medium tracking-wide shadow-md hover:bg-black transition"
            >
              Learn About Our Approach
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/10 border border-[#dfcbbb] transition-transform duration-500 hover:scale-[1.015]">
            <img
              src="/images/lux-sitting-room.png"
              alt="Bespoke luxury space"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 bg-white text-[#312c29] text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-sm border border-neutral-300">
            Mayfair Project — 2025
          </div>
        </div>
      </div>
    </section>
  );
}
