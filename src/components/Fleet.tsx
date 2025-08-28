import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import fleetImage from '@/assets/fleet-lineup.jpg';
import fleet1 from '@/assets/fleet1.jpg';
import fleet2 from '@/assets/fleet2.jpg';
import fleet3 from '@/assets/fleet3.jpg';
import { Zap, Users, Gauge, Shield } from 'lucide-react';

const fleetData = [
  {
    name: "Desert Storm X1",
    description: "Our flagship model designed for maximum performance and luxury",
    specs: ["300HP Engine", "3-Seater", "GPS Navigation", "Premium Sound"],
    price: "AED 150/hour",
    features: ["High Performance", "Luxury Comfort", "Advanced Safety"],
    image: fleet1, // replace with specific image when you have it
  },
  {
    name: "Oasis Cruiser",
    description: "Perfect for families and leisure riding in calm waters",
    specs: ["180HP Engine", "2-Seater", "Eco Mode", "Storage Compartment"],
    price: "AED 120/hour",
    features: ["Family Friendly", "Fuel Efficient", "Easy Handling"],
    image: fleet2,
  },
  {
    name: "Dune Racer Pro",
    description: "Built for thrill-seekers who crave speed and agility",
    specs: ["250HP Engine", "1-Seater", "Sport Mode", "Racing Package"],
    price: "AED 135/hour",
    features: ["High Speed", "Racing Performance", "Pro Features"],
    image: fleet3,
  }
];

export const Fleet = () => {
  return (
    <section id="fleet" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Choose from our carefully curated collection of high-performance jet skis, 
            each maintained to the highest standards for your safety and enjoyment.
          </p>
        </div>

        {/* Fleet Showcase Image */}
        <div className="mb-16 zoom-in">
          <img 
            src={fleetImage} 
            alt="Premium jet ski fleet"
            className="w-full h-96 object-cover rounded-3xl shadow-luxury"
          />
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Shield, title: "Safety First", desc: "Latest safety equipment and comprehensive briefings" },
            { icon: Gauge, title: "Top Performance", desc: "Regularly maintained high-performance engines" },
            { icon: Users, title: "Expert Guides", desc: "Professional instructors and tour guides available" },
            { icon: Zap, title: "Latest Models", desc: "State-of-the-art jet skis with modern features" }
          ].map((item, index) => (
            <Card key={index} className="glass-card border-0 p-6 text-center fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-water rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {fleetData.map((ski, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 fade-in"
            >
              {/* Header: Image background instead of color */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={ski.image}
                  alt={`${ski.name} image`}
                  className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* soft gradient to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold drop-shadow">{ski.name}</h3>
                  <p className="text-3xl font-bold text-secondary drop-shadow">{ski.price}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{ski.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold">Specifications:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {ski.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {ski.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button className="w-full btn-hero">Reserve Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
