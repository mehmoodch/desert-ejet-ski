import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black/90 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              {/* Replaced text heading with logo */}
              <div className="mb-4">
                <img
                  src={logo}
                  alt="Desert EJets"
                  className="h-12 w-auto"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">Desert EJets</span>
              </div>

              <p className="text-white/70 leading-relaxed">
                Experience the ultimate adventure where pristine desert landscapes
                meet crystal-clear waters. Premium jet ski rentals in an Sharjah Desert.
              </p>
            </div>

            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  aria-label={['Facebook', 'Instagram', 'Twitter', 'YouTube'][index]}
                >
                  <Icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'Our Fleet',
                'Booking',
                'Gallery',
                'About Us',
                'Safety Guidelines',
                'Pricing',
                'Contact',
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors animated-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70">+971 56 740 6001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">info@desertejet.ae</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/70">Al Badayer - Industrial 1, Sharjah, UAE</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Operating Hours</h5>
              <p className="text-white/70 text-sm">Daily: 8:00 AM - 6:00 PM</p>
              <p className="text-white/70 text-sm">Sunset Tours: Until 8:00 PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-white/70 mb-4">
              Subscribe to get special offers, free giveaways, and adventure updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="hero" className="w-full">
                Subscribe
              </Button>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-white/70">Open Today</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm text-white/70">Bookings Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 Desert Ejet Ski Rental. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
