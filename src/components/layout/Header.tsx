'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="text-xl md:text-2xl font-serif font-semibold tracking-tight">
        Mayfair Interiors
      </Link>
      <nav className="space-x-4 md:space-x-6 text-sm uppercase tracking-wide">
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
