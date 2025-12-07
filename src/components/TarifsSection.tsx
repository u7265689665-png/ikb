import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TarifsProps {
  onNavigate: (section: string) => void;
}

const pricingPlans = [
  {
    name: "Enfants",
    age: "4-12 ans",
    price: "350",
    period: "/ an",
    features: [
      "3 cours par semaine",
      "Accès aux cours compétition",
      "Licence fédérale incluse",
      "Passages de grade",
      "Stages inclus",
    ],
    popular: false,
  },
  {
    name: "Ados/Adultes",
    age: "13 ans et +",
    price: "390",
    period: "/ an",
    features: [
      "3 cours par semaine",
      "Accès aux cours compétition",
      "Licence fédérale incluse",
      "Passages de grade",
      "Stages inclus",
    ],
    popular: true,
  },
];

const TarifsSection = ({ onNavigate }: TarifsProps) => {
  return (
    <section id="tarifs" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Nos Tarifs</h2>
          <p className="section-subtitle">
            Des formules adaptées à tous les budgets. Paiement en plusieurs fois possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-hover animate-fade-in ${plan.popular ? "ring-2 ring-primary shadow-hover scale-105" : "shadow-card"
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-heading tracking-wider">
                  POPULAIRE
                </div>
              )}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground tracking-wider">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.age}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  onClick={() => onNavigate("contact")}
                >
                  S'inscrire
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* 🎁 Cours d'essai gratuit */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white px-6 py-3 rounded-xl shadow-lg font-heading text-lg tracking-wide">
            🎁 Cours d’essai gratuit – Venez découvrir le club !
          </div>

          <div className="mt-4">
            <Button variant="hero"
              className="bg-black text-white hover:bg-black/80" onClick={() => onNavigate("contact")}>
              Réserver un cours d’essai
            </Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Les tarifs peuvent être soumis à des aides CAF ou coupons sport. Possibilité de paiement en plusieurs fois. Nous consulter.
        </p>
      </div>
    </section>
  );
};

export default TarifsSection;
