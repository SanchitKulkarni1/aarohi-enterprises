import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your construction crane management needs? Contact us today for a personalized consultation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-input"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background border-input"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12A10 10 0 1 1 12 2A10 10 0 0 1 22 12Z" stroke="white" strokeWidth="2"/>
                      <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 9H9.01M15 9H15.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Office Address</h3>
                    <p className="text-muted-foreground">
                      Aarohi Enterprises Bldg No:1, Shop No: 13<br/>
                      Royal Garden, At & Post Kurgaon<br/>
                      Tal & District: Palghar - 401502<br/>
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.93 21 3 13.07 3 3.08C3 2.48 3.48 2 4.08 2H7.09C7.69 2 8.17 2.48 8.17 3.08C8.17 4.08 8.35 5.04 8.68 5.94C8.81 6.24 8.74 6.58 8.5 6.82L6.82 8.5C8.39 11.58 12.42 15.61 15.5 17.18L17.18 15.5C17.42 15.26 17.76 15.19 18.06 15.32C18.96 15.65 19.92 15.83 20.92 15.83C21.52 15.83 22 16.31 22 16.92Z" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Contact Information</h3>
                    <p className="text-muted-foreground mb-2">
                      Phone: +91 12345 67890
                    </p>
                    <p className="text-muted-foreground">
                      Email: info@aarohienterprises.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br/>
                      Sunday: Emergency Services Only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;