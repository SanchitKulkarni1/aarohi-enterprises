const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Aarohi Enterprises</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aarohi Enterprises specializes in construction crane management, providing safe, efficient, and reliable crane operations for large-scale infrastructure and industrial projects.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of industry experience and a commitment to excellence, we deliver comprehensive crane management solutions that ensure your projects are completed safely, on time, and within budget.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/crane-operations.jpg"
              alt="Professional crane operations at construction site"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H15M9 15H15M17 21V7C17 5.89543 16.1046 5 15 5H9C7.89543 5 7 5.89543 7 7V21L12 18L17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
