import { Award, Users, Target, Heart } from "lucide-react";
import karatekaImage from "@/assets/coach1.jpg";

const features = [
  {
    icon: Award,
    title: "Excellence",
    description: "Formation de qualité dispensée par des ceintures noires certifiées",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Un club familial où chacun trouve sa place, des plus jeunes aux adultes",
  },
  {
    icon: Target,
    title: "Progression",
    description: "Un parcours structuré pour atteindre vos objectifs personnels",
  },
  {
    icon: Heart,
    title: "Valeurs",
    description: "Respect, discipline et entraide au cœur de notre enseignement",
  },
];

const AProposSection = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">À Propos du Club</h2>
          <p className="section-subtitle">
            L'International Karaté de Bagnolet, un club passionné au service des arts martiaux
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-primary/20 rounded-lg transform rotate-3" />
            <img
              src={karatekaImage}
              alt="Karatéka IKB"
              className="relative rounded-lg shadow-card w-full object-cover aspect-square"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-3xl text-foreground mb-4 tracking-wide">
                Notre Histoire
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Fondé à Bagnolet en 2017 par <strong>Fares Guedjdal</strong>, ceinture noire <strong>5ᵉ dan</strong> en <strong>Karaté Shotokan</strong>, ancien <strong>champion de France</strong> dans plusieurs disciplines sous la <strong>FFK</strong>, <strong>champion international de karaté traditionnel </strong>  et multi‑champion en <strong>Karaté Full Contact</strong>, <strong>Light Contact</strong>, <strong>Krav Maga</strong> et <strong>Karaté Mix</strong>. Diplômé <strong>expert</strong>, il possède également une carrière de <strong>coaching de haut niveau</strong> en karaté et MMA.
                </p>


                <p>
                  Le club <strong>IKB</strong> a pour objectif de transmettre les valeurs fondamentales des arts martiaux tout en proposant un enseignement moderne et adapté à chaque pratiquant.
                </p>

                <p>
                  Notre mission est de former les jeunes afin qu’ils apprennent une discipline complète, développent leur technique, discipline et confiance, et puissent progresser jusqu’au plus haut niveau, que ce soit pour les passages de grade, la compétition ou la pratique loisir.
                </p>
              </div>

            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-foreground tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AProposSection;
