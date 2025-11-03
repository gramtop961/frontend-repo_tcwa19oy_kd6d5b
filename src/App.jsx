import React, { useRef, useState } from 'react';
import Navigation from './components/Navigation';
import HeroCarousel from './components/HeroCarousel';
import Analytics from './components/Analytics';
import BookingAndProvider from './components/BookingAndProvider';

const App = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const bookRef = useRef(null);

  const scrollToBook = () => {
    const el = document.getElementById('book');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navigation onBookClick={scrollToBook} onRegisterClick={() => setOpenRegister(true)} />
      <main>
        <HeroCarousel onPrimaryAction={scrollToBook} />
        <Analytics />
        <BookingAndProvider openRegister={openRegister} onOpenRegister={setOpenRegister} ref={bookRef} />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Happy Ties — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#analytics" className="hover:text-slate-900">Analytics</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
