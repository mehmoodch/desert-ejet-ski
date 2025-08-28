import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Image as ImageIcon, Star } from "lucide-react";

import heroImage from "@/assets/hero-jetski.jpg";
import actionImage from "@/assets/action.jpg";
import fleetImage from "@/assets/fleet-lineup.jpg";
import customerImage from "@/assets/happy-company.jpg";
import desertSunset from "@/assets/desert-sunset.jpg";
import racingImage from "@/assets/racing.jpg";
import heroVideo from "@/assets/people-on-jet-skis.mp4"; // <-- the video to play

type GalleryItem = {
  type: "image" | "video";
  src: string;             // image src or video poster
  title: string;
  category: "Adventure" | "Equipment" | "Experience" | "Scenery" | "Video";
  featured: boolean;
  videoSrc?: string;       // present when type === "video"
  poster?: string;
};

const galleryItems: GalleryItem[] = [
  { type: "image", src: actionImage,  title: "Jet Ski Action",   category: "Adventure", featured: true  },
  { type: "image", src: fleetImage,   title: "Premium Fleet",    category: "Equipment", featured: false },
  { type: "image", src: customerImage,title: "Happy Customers",  category: "Experience",featured: false },
  { type: "image", src: desertSunset, title: "Desert Vibes",     category: "Scenery",   featured: true  },
  { type: "video", src: heroImage,    title: "Adventure Highlights", category: "Video", featured: true, videoSrc: heroVideo, poster: heroImage },
  { type: "image", src: racingImage,  title: "Desert Racing",    category: "Adventure", featured: false },
];

export const Gallery = () => {
  const [filter, setFilter] = useState<"all" | GalleryItem["category"]>("all");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories: ("all" | GalleryItem["category"])[] = ["all", "Adventure", "Equipment", "Experience", "Scenery", "Video"];
  const filteredItems = filter === "all" ? galleryItems : galleryItems.filter(i => i.category === filter);

  const openItem = (item: GalleryItem) => {
    setSelected(item);
    setOpen(true);
  };

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const openFeaturedVideo = () =>
    openItem({ type: "video", src: heroImage, title: "Ultimate Desert Adventure Experience", category: "Video", featured: true, videoSrc: heroVideo, poster: heroImage });

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Gallery & Videos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Explore our collection of stunning photos and videos showcasing the ultimate desert jet ski experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? "hero" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="glass-card border-0 overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500 fade-in"
              onClick={() => openItem(item)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 text-white" />
                  ) : (
                    <ImageIcon className="w-12 h-12 text-white" />
                  )}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-0">
                    {item.category}
                  </Badge>
                </div>

                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-primary/20 backdrop-blur-sm text-primary border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-secondary font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Video Section */}
        <Card className="glass-card border-0 overflow-hidden fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative aspect-video lg:aspect-auto">
              <img src={heroImage} alt="Featured adventure video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full w-20 h-20"
                  onClick={openFeaturedVideo}
                  aria-label="Play featured video"
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">Featured Video</Badge>
              <h3 className="text-3xl font-bold mb-4">Ultimate Desert Adventure Experience</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Watch our comprehensive video guide showcasing the complete desert jet ski experience — from safety briefing to
                sunset rides across the pristine oasis waters.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="hero" onClick={openFeaturedVideo}>Watch Full Video</Button>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-secondary mr-1" />
                  <span>4.9/5 • 2.3K views</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Memories?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of adventurers who have experienced the magic of desert jet skiing
          </p>
          <Button variant="hero" size="lg">Book Your Adventure Today</Button>
        </div>
      </div>

      {/* Dialog / Lightbox */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="p-0 max-w-5xl overflow-hidden bg-black">
          {selected?.type === "video" && selected.videoSrc ? (
            <video
              ref={videoRef}
              src={selected.videoSrc}
              poster={selected.poster || selected.src}
              autoPlay
              controls
              playsInline
              className="w-full h-auto aspect-video"
            />
          ) : selected ? (
            <img src={selected.src} alt={selected.title} className="w-full h-auto" />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
};
