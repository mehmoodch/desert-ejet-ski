import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavAnchor } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/people-on-jet-skis.mp4';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Sticky, elegant nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrollY > 12 ? 'bg-black/55 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center gap-16 md:gap-20 xl:gap-24 py-3 md:py-4">
            {/* Bigger logo */}
            <img
              src={logo}
              alt="Desert EJets"
              className="h-16 md:h-20 w-auto drop-shadow"
              loading="lazy"
              decoding="async"
            />

            {/* Desktop links: larger & bold */}
            <div className="hidden md:flex items-center gap-10 text-white font-semibold tracking-wide text-lg">
              <NavAnchor targetId="fleet"   className="animated-underline hover:text-white/90">Fleet</NavAnchor>
              <NavAnchor targetId="about"   className="animated-underline hover:text-white/90">About</NavAnchor>
              <NavAnchor targetId="booking" className="animated-underline hover:text-white/90">Booking</NavAnchor>
              <NavAnchor targetId="gallery" className="animated-underline hover:text-white/90">Gallery</NavAnchor>
              <NavAnchor targetId="contact" className="animated-underline hover:text-white/90">Contact Us</NavAnchor>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/40 text-white hover:bg-black/55 transition"
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile links (centered pill, smooth-scroll, closes on select) */}
          <div
            className={`md:hidden transition-all duration-300 ${
              mobileOpen ? 'opacity-100 translate-y-0 pb-3' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="mx-auto w-fit rounded-2xl bg-black/70 backdrop-blur-xl px-6 py-3 text-white/90 font-medium flex items-center gap-6">
              <NavAnchor targetId="fleet"   onSelect={() => setMobileOpen(false)} className="hover:text-white">Fleet</NavAnchor>
              <NavAnchor targetId="about"   onSelect={() => setMobileOpen(false)} className="hover:text-white">About</NavAnchor>
              <NavAnchor targetId="booking" onSelect={() => setMobileOpen(false)} className="hover:text-white">Booking</NavAnchor>
              <NavAnchor targetId="gallery" onSelect={() => setMobileOpen(false)} className="hover:text-white">Gallery</NavAnchor>
              <NavAnchor targetId="contact" onSelect={() => setMobileOpen(false)} className="hover:text-white">Contact Us</NavAnchor>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Experience the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              Desert on Water
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the ultimate adventure where pristine desert landscapes meet crystal-clear waters. 
            Premium jet ski rentals in an oasis paradise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">Book Your Adventure</Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Explore Fleet
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
