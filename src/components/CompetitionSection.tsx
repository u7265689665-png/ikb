import { Award, Target, Users } from "lucide-react";
import mmaChampion from "@/assets/ilyes.jpg"; // ajoute l'image de Ilyes si tu en as une

const competitionFeatures = [
  {
    icon: Award,
    title: "Champions nationaux",
    description: "Chaque année, notre club IKB remporte le championnat de France dans plusieurs disciplines et catégories depuis sa création.",
  },
  {
    icon: Target,
    title: "Champion MMA",
    description: "Actuellement, nous avons un champion en MMA : <strong>Elyes Belhoussa</strong>, <strong>invaincu 4-0 à 100% Fight en -60kg</strong>, qui vise à rejoindre l'UFC."

  },
  {
    icon: Users,
    title: "Futurs champions",
    description: "Nous préparons activement d'autres athlètes pour devenir champions dans plusieurs disciplines.",
  },
];

const CompetitionSection = () => {
  return (
    <section id="competition" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Résultats et Champions</h2>
          <p className="section-subtitle">
            Notre club IKB s'impose chaque année au plus haut niveau et forme les futurs champions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image du champion */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-primary/20 rounded-lg transform rotate-3" />
            <img
              src={mmaChampion}
              alt="Champion MMA Elyes Belhoussa"
              className="relative rounded-lg shadow-card w-full object-cover aspect-square"
            />
          </div>

          {/* Contenu */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-3xl text-foreground mb-4 tracking-wide">
                Nos Résultats
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Depuis sa création, le club <strong>IKB</strong> est chaque année <strong>champion de France</strong> dans plusieurs disciplines et catégories. Nous formons des athlètes d’excellence dans le karaté traditionnel, le karaté full contact, light contact, karaté mix et MMA.
                </p>

                <p>
                  Actuellement, nous comptons parmi nos champions <strong>Elyes Belhoussa</strong>, champion MMA 4-0 à 100% Fight en -60kg, qui vise à rejoindre l'<strong>UFC</strong>.
                </p>

                <p>
                  Nous préparons activement d'autres champions dans plusieurs disciplines afin de perpétuer la tradition d’excellence du club.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 gap-6">
              {competitionFeatures.map((feature, index) => (
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
                    <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: feature.description }} />
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

export default CompetitionSection;
