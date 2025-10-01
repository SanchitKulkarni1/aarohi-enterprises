import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Aarohi Enterprises</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#why-choose-us" className="text-foreground hover:text-primary transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </a>
          </nav>

          <Button variant="default" onClick={() => window.location.href="#contact"}>
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;