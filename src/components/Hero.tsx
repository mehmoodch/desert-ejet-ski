import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/people-on-jet-skis.mp4';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background VIDEO (no shade) */}
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

      {/* ⛔ Removed: <div className="hero-overlay" /> and <div className="hero-scrim" /> */}

      {/* Navigation */}
      {/* Navigation (centered cluster + responsive) */}
<nav className="relative z-20 pt-4 md:pt-6">
  <div className="mx-auto flex items-center justify-center
                  gap-12 sm:gap-16 md:gap-24 lg:gap-28">
    <img src={logo} alt="Desert EJets" className="h-14 sm:h-16 w-auto" />

    <div className="hidden md:flex items-center gap-8 text-white/90">
      <a href="#fleet" className="animated-underline hover:text-white transition-colors">Fleet</a>
      <a href="#about" className="animated-underline hover:text-white transition-colors">About</a>
      <a href="#booking" className="animated-underline hover:text-white transition-colors">Booking</a>
      <a href="#gallery" className="animated-underline hover:text-white transition-colors">Gallery</a>
    </div>

    {/* Mobile menu button */}
    <button
      type="button"
      aria-label="Open menu"
      className="md:hidden absolute right-4 top-4 p-2 rounded-lg bg-black/40 text-white hover:bg-black/50 transition"
      onClick={() => setMobileOpen((v) => !v)}
    >
      <Menu className="h-6 w-6" />
    </button>
  </div>

  {/* Mobile links (centered, collapsible) */}
  {mobileOpen && (
    <div className="md:hidden mt-4 flex justify-center">
      <div className="flex items-center gap-6 rounded-full bg-black/40 backdrop-blur px-4 py-2 text-white/90">
        <a onClick={() => setMobileOpen(false)} href="#fleet" className="hover:text-white">Fleet</a>
        <a onClick={() => setMobileOpen(false)} href="#about" className="hover:text-white">About</a>
        <a onClick={() => setMobileOpen(false)} href="#booking" className="hover:text-white">Booking</a>
        <a onClick={() => setMobileOpen(false)} href="#gallery" className="hover:text-white">Gallery</a>
      </div>
    </div>
  )}
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
