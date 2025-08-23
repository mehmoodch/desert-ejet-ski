import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import customerImage from '@/assets/happy-customers.jpg';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "California",
    rating: 5,
    text: "Absolutely incredible experience! The jet skis were top-notch and the desert oasis setting was breathtaking. Perfect for our anniversary celebration.",
    avatar: "SJ"
  },
  {
    name: "Miguel Rodriguez",
    location: "Arizona",
    rating: 5,
    text: "Best adventure activity I've ever done! The staff was professional, the equipment was pristine, and the scenery was simply magical.",
    avatar: "MR"
  },
  {
    name: "Emily Chen",
    location: "Nevada",
    rating: 5,
    text: "Our family had the most amazing time. Even the kids were comfortable and safe. The sunset ride was the highlight of our vacation!",
    avatar: "EC"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 water-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            What Our Adventurers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Join thousands of satisfied customers who have experienced the thrill of desert jet skiing
          </p>
        </div>

        {/* Customer Experience Image */}
        <div className="mb-16 zoom-in">
          <img 
            src={customerImage} 
            alt="Happy customers enjoying jet skiing"
            className="w-full h-96 object-cover rounded-3xl shadow-luxury"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-0 p-6 fade-in hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-desert rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "15+", label: "Premium Jet Skis" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};