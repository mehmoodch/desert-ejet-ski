import { Button } from '@/components/ui/button';
import desertSunset from '@/assets/desert-sunset.jpg';
import { Heart, Award, Users, Compass } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${desertSunset})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
              Our Story
            </h2>
            <div className="space-y-6 text-lg leading-relaxed fade-in">
              <p>
                Founded in 2019, Desert Ejet Ski Rental was born from a passion for adventure 
                and a vision to create unforgettable experiences in one of nature's most spectacular settings.
              </p>
              <p>
                We discovered this hidden desert oasis and knew we had found something truly special. 
                The combination of pristine waters surrounded by dramatic desert landscapes creates 
                a unique playground unlike anywhere else in the world.
              </p>
              <p>
                Today, we're proud to be the premier destination for luxury jet ski adventures, 
                offering top-tier equipment, expert guidance, and memories that last a lifetime.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 fade-in">
              {[
                { icon: Heart, title: "Passion Driven", desc: "Every adventure crafted with love" },
                { icon: Award, title: "Award Winning", desc: "Recognized for excellence" },
                { icon: Users, title: "Expert Team", desc: "Professional & certified guides" },
                { icon: Compass, title: "Adventure First", desc: "Safety meets excitement" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 fade-in">
              <Button variant="hero" size="lg" className="mr-4">
                Start Your Adventure
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="glass-card p-8 text-center fade-in">
            <h3 className="text-2xl font-bold mb-8">Why Choose Desert Ejet Ski?</h3>
            <div className="space-y-6">
              {[
                { stat: "5+", label: "Years of Excellence" },
                { stat: "100%", label: "Safety Record" },
                { stat: "50+", label: "Desert Adventures Daily" },
                { stat: "4.9/5", label: "Customer Rating" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-border/20 pb-4">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="text-2xl font-bold text-primary">{item.stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};