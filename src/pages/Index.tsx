import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Aarohi Enterprises Boisar | Crane Operations, Heavy Machinery & Construction Services</title>
        <meta
          name="description"
          content="Aarohi Enterprises Boisar provides professional crane operations, heavy machinery rentals, and construction services in Boisar, Maharashtra. Trusted crane management company with safety-first approach."
        />
        <meta name="keywords" content="Aarohi Enterprises Boisar, crane operations Boisar, construction services Boisar, heavy machinery rental Boisar, crane management Maharashtra, construction company Boisar, industrial crane services, safety crane operations" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aarohi Enterprises Boisar - Professional Crane & Construction Services" />
        <meta property="og:description" content="Leading crane operations and construction services company in Boisar, Maharashtra. Professional crane management with unmatched safety standards." />
        <meta property="og:url" content="https://aarohienterprisesboisar.in/" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <link rel="canonical" href="https://aarohienterprisesboisar.in/" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Aarohi Enterprises Boisar" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Boisar" />
        <meta name="geo.position" content="19.8139;72.7559" />
        <meta name="ICBM" content="19.8139, 72.7559" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aarohi Enterprises Boisar",
            "url": "https://aarohienterprisesboisar.in/",
            "logo": "https://aarohienterprisesboisar.in/favicon-32x32.png",
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/",
              "https://www.linkedin.com/"
            ],
            "description": "Professional crane operations, heavy machinery rentals, and construction services in Boisar, Maharashtra. Leading crane management company with safety-first approach.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boisar",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN",
              "postalCode": "401501"
            },
            "areaServed": {
              "@type": "City",
              "name": "Boisar"
            },
            "serviceType": ["Crane Operations", "Heavy Machinery Rental", "Construction Services", "Industrial Equipment"],
            "keywords": "crane operations Boisar, construction services Boisar, heavy machinery rental, crane management Maharashtra"
          })}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
