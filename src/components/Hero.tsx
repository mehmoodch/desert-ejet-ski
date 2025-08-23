import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-jetski.jpg';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-2xl font-bold text-white tracking-wider">
          Desert Ejet Ski
        </div>
        <div className="hidden md:flex space-x-8 text-white/90">
          <a href="#fleet" className="animated-underline hover:text-white transition-colors">Fleet</a>
          <a href="#about" className="animated-underline hover:text-white transition-colors">About</a>
          <a href="#booking" className="animated-underline hover:text-white transition-colors">Booking</a>
          <a href="#gallery" className="animated-underline hover:text-white transition-colors">Gallery</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
        <div className="max-w-4xl fade-in visible">
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
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Book Your Adventure
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
              Explore Fleet
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};