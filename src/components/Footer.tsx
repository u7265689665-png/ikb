import { Facebook, Instagram, Mail, PhoneIcon } from "lucide-react";
import logoIkb from "@/assets/logo-ikb.jpg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <img src={logoIkb} alt="IKB Logo" className="h-16 w-16 object-contain" />
            <div>
              <h3 className="font-heading text-xl text-secondary-foreground tracking-wider">
                IKB KARATÉ BAGNOLET
              </h3>
              <p className="text-secondary-foreground/70 text-sm">
                International Karaté de Bagnolet
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
             <a
              href="tel:+33 6 13 32 14 70"
              className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Facebook"
            >
              <PhoneIcon className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="https://www.facebook.com/Karate.Paris.Bagnolet"
              className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="https://www.instagram.com/i.k.b_team"
              className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="mailto:ikb.karate.bagnolet@gmail.com"
              className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {new Date().getFullYear()} IKB Karaté Bagnolet. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
