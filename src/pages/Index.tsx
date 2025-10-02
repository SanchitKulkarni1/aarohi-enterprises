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
        <title>Aarohi Enterprises | Crane Operations, Rentals & Construction Services</title>
        <meta
          name="description"
          content="Aarohi Enterprises provides crane operations, heavy machinery, and construction services with a strong focus on safety and reliability. Contact us for rentals and turnkey solutions."
        />
        <meta name="keywords" content="Aarohi Enterprises, crane operations, construction, machinery rental, safety" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aarohi Enterprises" />
        <meta property="og:description" content="Crane operations and construction services with safety-first execution." />
        <meta property="og:url" content="https://aarohienterprisesboisar.in/" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <link rel="canonical" href="https://aarohienterprisesboisar.in/" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Aarohi Enterprises" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Aarohi Enterprises",
            "url": "https://aarohienterprisesboisar.in/",
            "logo": "https://aarohienterprisesboisar.in/favicon-32x32.png",
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/",
              "https://www.linkedin.com/"
            ],
            "description": "Crane operations, heavy machinery rentals, and construction services in Boisar.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Boisar",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
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
