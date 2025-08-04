// components/layout/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-dark pt-16 pb-10 px-6 md:px-12 mt-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 text-sm text-dark">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-semibold tracking-tight mb-4 text-dark">
            Mayfair Interiors
          </h2>
          <p className="text-gray-700">
            Creating timeless, luxurious interiors across London and beyond.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link href="/services" className="hover:text-black font-medium">Services</Link></li>
            <li><Link href="/projects" className="hover:text-black font-medium">Projects</Link></li>
            <li><Link href="/about" className="hover:text-black font-medium">About</Link></li>
            <li><Link href="/contact" className="hover:text-black font-medium">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              Email: <a href="mailto:info@mayfairinteriors.co" className="hover:text-black underline">info@mayfairinteriors.co</a>
            </li>
            <li>
              Phone: <a href="tel:+441234567890" className="hover:text-black underline">+44 1234 567890</a>
            </li>
            <li>Location: London, UK</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-600 mb-4">
            Stay Inspired
          </h3>
          <p className="text-gray-700 mb-3">
            Get design ideas and project updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-100 text-dark px-4 py-2 text-sm rounded w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-dark text-white px-4 py-2 text-sm rounded hover:bg-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center mt-16">
        © {new Date().getFullYear()} Mayfair Interiors. All rights reserved.
      </div>
    </footer>
  );
}
