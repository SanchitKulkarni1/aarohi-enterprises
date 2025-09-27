const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-accent">Aarohi Enterprises</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Leading provider of construction crane management services, committed to safety, efficiency, and reliability in every project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V12C8 9.79086 9.79086 8 12 8H16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="9" width="4" height="12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="6" cy="4" r="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Crane Rentals</span></li>
              <li><span className="text-white/80">On-site Management</span></li>
              <li><span className="text-white/80">Safety & Compliance</span></li>
              <li><span className="text-white/80">Maintenance Support</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Aarohi Enterprises. All rights reserved. | Designed for excellence in construction crane management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;