import { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Fleet } from '@/components/Fleet';
import { Testimonials } from '@/components/Testimonials';
import { About } from '@/components/About';
import { Booking } from '@/components/Booking';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "Desert Ejet Ski Rental - Premium Water Adventures in Desert Oasis";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience luxury jet ski rentals in a stunning desert oasis. Premium equipment, professional guides, and unforgettable adventures in pristine waters surrounded by dramatic desert landscapes.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Fleet />
      <Testimonials />
      <About />
      <Booking />
      <Gallery />
      <Footer />
    </main>
  );
};

export default Index;
