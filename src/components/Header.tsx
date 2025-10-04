import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/";
  
  // Function to navigate to home page and scroll to section
  const navigateToSection = (sectionId: string) => {
    if (isHomePage) {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then scroll
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/aarohilogo.jpeg" 
              alt="Aarohi Enterprises Logo" 
              className="max-h-12 object-contain"
            />
            <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              Aarohi Enterprises
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => navigateToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => navigateToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => navigateToSection('why-choose-us')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Why Choose Us
            </button>
          </nav>

          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3 items-center">
            <Link 
              to="/gallery" 
              onClick={() => {
                // Ensure we scroll to top when navigating to gallery
                setTimeout(() => window.scrollTo(0, 0), 0);
              }}
            >
              <Button 
                variant="default"
                className="w-full sm:w-auto"
              >
                Gallery
              </Button>
            </Link>
            <Button 
              variant="default" 
              onClick={() => navigateToSection('contact')}
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;