import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIkb from "@/assets/logo-ikb.jpg";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "horaires", label: "Horaires" },
    { id: "apropos", label: "À propos" },
    { id: "competition", label: "Résultats et Champions" },
    { id: "tarifs", label: "Tarifs" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigate("accueil")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logoIkb} alt="IKB Logo" className="h-14 w-14 object-contain" />
            <span className="font-heading text-xl tracking-wider hidden sm:block">IKB KARATÉ</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="nav"
                onClick={() => handleNavigate(item.id)}
                className={activeSection === item.id ? "text-primary" : ""}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigate(item.id)}
                  className={`justify-start ${activeSection === item.id ? "text-primary bg-primary/10" : ""}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
