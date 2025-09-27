import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Crane Rentals",
    description: "State-of-the-art crane equipment available for short-term and long-term rental with full operator support.",
    icon: "🏗️"
  },
  {
    title: "On-site Management",
    description: "Comprehensive project management services ensuring efficient crane operations and seamless coordination.",
    icon: "👷"
  },
  {
    title: "Safety & Compliance",
    description: "Rigorous safety protocols and regulatory compliance to ensure accident-free operations on every project.",
    icon: "🛡️"
  },
  {
    title: "Maintenance Support",
    description: "24/7 maintenance and technical support to keep equipment running at peak performance.",
    icon: "🔧"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive crane management solutions tailored to meet the unique demands of your construction projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-border bg-card">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;