import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import HorairesSection from "@/components/HorairesSection";
import AProposSection from "@/components/AProposSection";
import TarifsSection from "@/components/TarifsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CompetitionSection from "@/components/CompetitionSection";
import VideosSection from "@/components/VideosSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["accueil", "horaires", "apropos", "competition", "videos", "tarifs", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <HeroCarousel onNavigate={scrollToSection} />
        <HorairesSection />
        <AProposSection />
        <CompetitionSection />
        <VideosSection />
        <TarifsSection onNavigate={scrollToSection} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
