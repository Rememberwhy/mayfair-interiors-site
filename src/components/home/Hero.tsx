'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/Hero1.png')] bg-no-repeat bg-center bg-contain md:bg-cover will-change-transform transition-transform duration-500"></div>

      {/* Text Overlay */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded max-w-2xl text-center shadow-xl">
        <h1 className="text-4xl md:text-6xl font-serif text-dark font-semibold mb-2">
          Mayfair Interiors
        </h1>
        <p className="text-sm md:text-lg text-dark tracking-wide">
          Luxury Interior Design in the Heart of London
        </p>
      </div>
    </section>
  );
}
