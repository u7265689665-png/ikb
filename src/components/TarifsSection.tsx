import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TarifsProps {
  onNavigate: (section: string) => void;
}

const pricingPlans = [
  {
    name: "Enfants",
    age: "5-12 ans",
    price: "180",
    period: "/ an",
    features: [
      "2 cours par semaine",
      "Kimono offert la 1ère année",
      "Licence fédérale incluse",
      "Passages de grade",
    ],
    popular: false,
  },
  {
    name: "Ados/Adultes",
    age: "13 ans et +",
    price: "220",
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
  {
    name: "Famille",
    age: "2 personnes ou +",
    price: "350",
    period: "/ an",
    features: [
      "Accès pour 2 membres",
      "Tous les cours inclus",
      "Licence fédérale incluse",
      "Passages de grade",
      "Remise 3ème membre",
    ],
    popular: false,
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-hover animate-fade-in ${
                plan.popular ? "ring-2 ring-primary shadow-hover scale-105" : "shadow-card"
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

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Les tarifs peuvent être soumis à des aides CAF ou coupons sports. Nous consulter.
        </p>
      </div>
    </section>
  );
};

export default TarifsSection;
