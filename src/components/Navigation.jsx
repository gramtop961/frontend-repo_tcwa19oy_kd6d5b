import React from 'react';
import { Calendar, UserPlus } from 'lucide-react';

const Navigation = ({ onBookClick, onRegisterClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600" />
          <span className="font-semibold text-slate-800 text-lg">Happy Ties</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#analytics" className="hover:text-slate-900 transition">Analytics</a>
          <a href="#book" className="hover:text-slate-900 transition">Services</a>
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow hover:shadow-md active:scale-[.98] transition"
          >
            <Calendar size={16} />
            Book Your Event
          </button>
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 text-sm shadow hover:shadow-md active:scale-[.98] transition"
          >
            <UserPlus size={16} />
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
