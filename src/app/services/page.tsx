// src/app/services/page.tsx
'use client';

import React from 'react';

const services = [
  {
    title: 'Design & Build',
    description:
      'From architectural planning to detailed interior styling, we create timeless spaces tailored to your vision.',
  },
  {
    title: 'Renovation & Restoration',
    description:
      'We handle full-scale renovations, restoring period properties or transforming modern homes with precision and care.',
  },
  {
    title: 'Interior Re-Decoration',
    description:
      'We refresh interiors with refined colour schemes, luxury furnishings, and elegant décor updates to elevate existing spaces.',
  },
  {
    title: 'Furniture Procurement',
    description:
      'We source and deliver exclusive furniture and décor, curated to match your design goals and space requirements.',
  },
  {
    title: 'Custom Joinery & Built-Ins',
    description:
      'Tailor-made cabinetry, wardrobes, shelving and panelling that enhance both function and style in your home.',
  },
  {
    title: 'Turnkey Project Delivery',
    description:
      'We manage every detail from concept to completion, ensuring a seamless experience and flawless results.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-dark px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-center">
          Our Services
        </h1>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-beige p-6 rounded-lg shadow hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-serif font-bold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
