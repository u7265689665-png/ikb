import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";


import compet1 from "@/assets/compet-1.jpg";
import compet2 from "@/assets/compet-2.jpg";
import compet3 from "@/assets/compet-3.jpg";

import enfant1 from "@/assets/enfant-1.jpg";
import enfant2 from "@/assets/enfant-2.jpg";
import enfant3 from "@/assets/enfant-3.jpg";


import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";

interface Slide {
    images: string[];
    title: string;
    subtitle: string;
}

const slides: Slide[] = [
    {
        images: [enfant1, enfant2, enfant3],
        title: "Cours Enfants",
        subtitle: "Faites découvrir à vos enfants les arts martiaux dès 5 ans et développez leur discipline, confiance et énergie"

    },
    {
        images: [team1, team2, team3],
        title: "Entraînement Collectif",
        subtitle: "Progressez ensemble dans plusieurs disciplines : Karaté Shotokan traditionnel, Karaté contact et Karaté mix, dans une ambiance conviviale"

    },
    {
        images: [compet1, compet2, compet3],
        title: "Compétition",
        subtitle: "Progressez et devenez champion : notre club est champion de France dans plusieurs disciplines chaque année",
    }
];

interface HeroCarouselProps {
    onNavigate: (section: string) => void;
}

const HeroCarousel = ({ onNavigate }: HeroCarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section id="accueil" className="relative h-screen w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1500 flex flex-col md:flex-row gap-1 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {slide.images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            alt={`${slide.title} ${i + 1}`}
                            className="w-full md:w-1/3 h-full object-cover"
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/80" />
                </div>
            ))}

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="container mx-auto px-4 text-center pointer-events-auto">

                    <h1
                        className="text-lg md:text-xl text-primary-foreground/90 mb-2 animate-fade-in"
                        style={{ animationDelay: "0.2s" }}
                    >
                        International Karaté de Bagnolet
                    </h1>
                    <p
                        className="text-2xl md:text-3xl text-primary-foreground font-heading tracking-wide mb-8 animate-fade-in"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {slides[currentSlide].title}
                    </p>
                    <p
                        className="text-lg text-primary-foreground/80 mb-10 animate-fade-in"
                        style={{ animationDelay: "0.4s" }}
                    >
                        {slides[currentSlide].subtitle}
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Button
                            variant="hero"
                            size="xl"
                            onClick={() => onNavigate("contact")}
                        >
                            Nous rejoindre
                        </Button>
                        <Button
                            variant="heroOutline"
                            size="xl"
                            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
                            onClick={() => onNavigate("horaires")}
                        >
                            Voir les horaires
                        </Button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors"
                aria-label="Slide précédent"
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 text-primary-foreground transition-colors"
                aria-label="Slide suivant"
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? "bg-primary w-8"
                            : "bg-primary-foreground/50 hover:bg-primary-foreground"
                            }`}
                        aria-label={`Aller au slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
