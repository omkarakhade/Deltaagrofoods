'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products/veg', label: 'Veg Products' },
  { href: '/products/non-veg', label: 'Non-Veg Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-px flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-delta-navy">DELTA</span>
            <span className="text-xs font-bold text-delta-green tracking-wide -mt-1">
              AGRO FOODS
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium hover:text-delta-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-delta-navy" />
          <span className="w-6 h-0.5 bg-delta-navy" />
          <span className="w-6 h-0.5 bg-delta-navy" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-5 py-4 border-b border-gray-50 text-gray-700 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
