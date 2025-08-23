import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, CreditCard } from 'lucide-react';

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '',
    jetski: '',
    guests: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 px-6 desert-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            Book Your Desert Adventure
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Ready to experience the thrill? Reserve your premium jet ski and 
            create memories that will last a lifetime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="glass-card border-0 fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Reserve Your Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Booking Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Date</Label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label>Preferred Time</Label>
                  <Select onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="1pm">1:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="5pm">5:00 PM (Sunset Special)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Duration</Label>
                  <Select onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1hr">1 Hour - $120</SelectItem>
                      <SelectItem value="2hr">2 Hours - $220</SelectItem>
                      <SelectItem value="3hr">3 Hours - $300</SelectItem>
                      <SelectItem value="fullday">Full Day - $500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Number of Guests</Label>
                  <Select onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="How many?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5+">5+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Jet Ski Model</Label>
                <Select onValueChange={(value) => handleInputChange('jetski', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose your ride" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="storm">Desert Storm X1 - Premium</SelectItem>
                    <SelectItem value="oasis">Oasis Cruiser - Family</SelectItem>
                    <SelectItem value="dune">Dune Racer Pro - Sport</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <CreditCard className="w-5 h-5 mr-2" />
                Complete Booking
              </Button>
            </CardContent>
          </Card>

          {/* Booking Summary & Info */}
          <div className="space-y-6">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, title: "Flexible Dates", desc: "Easy rescheduling" },
                { icon: Clock, title: "2hr Minimum", desc: "Maximum fun time" },
                { icon: Users, title: "Group Discounts", desc: "5+ people save 15%" },
                { icon: CreditCard, title: "Secure Payment", desc: "100% protected" }
              ].map((item, index) => (
                <Card key={index} className="glass-card border-0 p-4 text-center fade-in">
                  <CardContent className="p-0">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Booking Summary */}
            <Card className="glass-card border-0 fade-in">
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Premium jet ski rental",
                    "Safety equipment & life jackets",
                    "Professional safety briefing",
                    "Guided tour of the oasis",
                    "Professional photography service",
                    "Refreshments & water",
                    "Free parking",
                    "Insurance coverage"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="glass-card border-0 fade-in">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Need Help?</h4>
                <div className="space-y-2 text-sm">
                  <p>📞 (555) JETSKI-1</p>
                  <p>📧 book@desertejetski.com</p>
                  <p>🕒 Daily 8AM - 6PM</p>
                  <p>📍 Desert Oasis Marina, NV</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};