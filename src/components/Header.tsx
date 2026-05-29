import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-emerald-900 font-serif font-black text-xl tracking-wide">Prakriti</span>
            <span className="text-stone-500 font-sans text-xs uppercase tracking-widest font-bold border-l border-stone-200 pl-2 hidden sm:inline">
              Grassroots Foundation
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1' : 'text-stone-600 hover:text-emerald-900'
              } transition`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1' : 'text-stone-600 hover:text-emerald-900'
              } transition`}
            >
              Our Story
            </Link>
            <Link
              to="/initiatives"
              className={`${
                isActive('/initiatives') ? 'text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1' : 'text-stone-600 hover:text-emerald-900'
              } transition`}
            >
              Our Work
            </Link>
            <Link
              to="/impact"
              className={`${
                isActive('/impact') ? 'text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1' : 'text-stone-600 hover:text-emerald-900'
              } transition`}
            >
              Transparency & Impact
            </Link>
            <Link
              to="/join"
              className={`${
                isActive('/join') ? 'text-emerald-900 font-bold border-b-2 border-emerald-900 pb-1' : 'text-stone-600 hover:text-emerald-900'
              } transition`}
            >
              Get Involved
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/join"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-medium text-xs uppercase tracking-wider transition shadow-sm"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-emerald-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <Link to="/" className="block text-stone-600 hover:text-emerald-900 text-sm transition">
                Home
              </Link>
              <Link to="/about" className="block text-stone-600 hover:text-emerald-900 text-sm transition">
                Our Story
              </Link>
              <Link to="/initiatives" className="block text-stone-600 hover:text-emerald-900 text-sm transition">
                Our Work
              </Link>
              <Link to="/impact" className="block text-stone-600 hover:text-emerald-900 text-sm transition">
                Transparency & Impact
              </Link>
              <Link to="/join" className="block text-stone-600 hover:text-emerald-900 text-sm transition">
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
