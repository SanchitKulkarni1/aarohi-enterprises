import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

type BaseItem = {
  id: string;
  alt: string;
  category: string;
};

type ImageItem = BaseItem & {
  type: "image";
  src: string;
};

type VideoItem = BaseItem & {
  type: "video";
  src: string;
  poster?: string;
};

type GalleryItem = ImageItem | VideoItem;

const STOCK_MEDIA: GalleryItem[] = [
  { id: "1", type: "image", src: "/assets/office1.jpeg", alt: "Crane at construction site", category: "Offices" },
  { id: "2", type: "image", src: "/assets/office2.jpeg", alt: "Skyscraper framework", category: "Offices" },
  { id: "3", type: "image", src: "/assets/operations1.jpeg", alt: "Crew with safety gear", category: "Machinery" },
  { id: "4", type: "image", src: "/assets/machine1.jpeg", alt: "Heavy machinery", category: "Machinery" },
  {
    id: "v1",
    type: "video",
    src: "/assets/drone.mp4",
    alt: "Drone flyover of site",
    category: "Videos",
  },
];

const Gallery = () => {
  const images = useMemo(() => STOCK_MEDIA.filter((m) => m.type === "image") as ImageItem[], []);
  const duplicated = useMemo(() => [...images, ...images], [images]);


  const HeroVideo = ({ src }: { src: string }) => (
    <section className="mb-10">
      <div className="relative w-full overflow-hidden rounded-xl border border-border bg-muted">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-[16/9] object-cover"
          onError={(e) => {
            console.warn('Video failed to load:', e);
            // Fallback to poster image if video fails
            const video = e.target as HTMLVideoElement;
            video.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'w-full aspect-[16/9] bg-muted flex items-center justify-center text-muted-foreground';
            fallback.textContent = 'Video unavailable';
            video.parentNode?.appendChild(fallback);
          }}
        />
      </div>
    </section>
  );

  const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
    <Card className="mr-4 w-48 sm:w-56 md:w-64 shrink-0 overflow-hidden rounded-xl border-border/60 shadow-sm">
      <CardContent className="p-0">
        <img 
          src={src} 
          alt={alt} 
          className="h-32 sm:h-36 md:h-40 w-full object-cover" 
          loading="lazy"
          onError={(e) => {
            console.warn('Image failed to load:', src);
            const img = e.target as HTMLImageElement;
            img.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'h-32 sm:h-36 md:h-40 w-full bg-muted flex items-center justify-center text-muted-foreground text-sm';
            fallback.textContent = 'Image unavailable';
            img.parentNode?.appendChild(fallback);
          }}
        />
      </CardContent>
    </Card>
  );

  const MarqueeStrip = ({ items }: { items: ImageItem[] }) => (
    <section className="group relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-[200%]" aria-hidden>
          {items.map((it) => (
            <ImageCard key={`a-${it.id}`} src={it.src} alt={it.alt} />
          ))}
          {items.map((it) => (
            <ImageCard key={`b-${it.id}`} src={it.src} alt={it.alt} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gallery | Aarohi Enterprises</title>
        <meta
          name="description"
          content="Explore Aarohi Enterprises project gallery including operations, machinery, and site visuals. Watch a drone flyover and view our latest work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aarohi Enterprises Gallery" />
        <meta property="og:description" content="A dynamic gallery of our latest projects and operations." />
        <meta property="og:url" content="https://aarohienterprisesboisar.in/gallery" />
        {/* 👇 Using a real hosted image for previews */}
        <meta property="og:image" content="https://aarohienterprisesboisar.in/assets/office1.jpeg" />
        <meta property="og:image:alt" content="Aarohi Enterprises Office Project" />
        <link rel="canonical" href="https://aarohienterprisesboisar.in/gallery" />
      </Helmet>

      <Header />
      <main id="gallery" className="container mx-auto px-6 pt-28 pb-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Project Gallery</h1>
          <p className="mt-2 text-muted-foreground">A dynamic showcase of our latest work and operations.</p>
        </div>

        <HeroVideo src="/assets/drone.mp4" />
        <MarqueeStrip items={duplicated} />

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee .marquee-track {
              animation: marquee 30s linear infinite;
            }
            .group:hover .marquee .marquee-track {
              animation-play-state: paused;
            }
          `}
        </style>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
