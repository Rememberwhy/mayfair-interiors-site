export default function BrandStatement() {
  return (
    <section className="bg-gradient-to-r from-[#c9a46d] via-[#b98a5b] to-[#f3ede6] text-dark px-4 md:px-6 pt-20 pb-28">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-snug tracking-tight text-white drop-shadow">
          Timeless Interiors Rooted in Elegance
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          We believe luxury is not about excess — it's about refinement, intention, and emotional impact.
          Every space we craft is thoughtfully designed to evoke calm, comfort, and confidence.
        </p>
        <div>
          <a
            href="/projects"
            className="inline-block bg-white text-[#3e2c1c] font-medium px-6 py-3 rounded-full shadow-md hover:bg-beige transition"
          >
            Explore Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}