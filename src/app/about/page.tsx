// src/app/about/page.tsx
'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-dark px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-10 text-center">
          About Mayfair Interiors
        </h1>

        <div className="space-y-6 text-lg leading-8 text-gray-800">
          <p>
            Mayfair Interiors is a London-based luxury interior design firm dedicated to
            creating elegant, timeless spaces that reflect the individuality of each client.
            With a strong focus on quality, craftsmanship, and attention to detail, we
            specialize in both residential and commercial interiors.
          </p>

          <p>
            Our team has extensive experience managing full-scale renovation and
            decoration projects — from initial concept and spatial planning, all the way to
            bespoke furniture procurement and styling. We believe every interior should
            feel effortless, sophisticated, and functional.
          </p>

          <p>
            Currently, we are proudly working on a number of exciting projects across
            Central London and beyond. Our approach is rooted in trust, creativity, and
            reliable delivery — we are a solid, committed team who take ownership of
            every step of the process.
          </p>

          <p>
            Whether you're seeking a full property transformation or a curated refresh of a
            single space, Mayfair Interiors is here to make your vision a reality.
          </p>
        </div>
      </div>
    </div>
  );
}
