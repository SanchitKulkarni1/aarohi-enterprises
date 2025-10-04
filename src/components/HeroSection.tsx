import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-construction.jpg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Leader in
            <span className="block text-accent"> Crane Management Boisar</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Efficient. Reliable. Safe Crane Operations.
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Aarohi Enterprises Boisar provides professional construction crane management services, heavy machinery rentals, and industrial equipment solutions for large-scale infrastructure projects across Maharashtra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
              onClick={() => window.location.href="#services"}
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3"
              onClick={() => window.open("https://maps.app.goo.gl/FApXB9EoEM1kHac46?g_st=ipc", "_blank", "noopener,noreferrer")}
            >
              Find Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
