import { Award, Target, Users } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import photo1 from "@/assets/champ1.jpg";
import photo2 from "@/assets/champ2.jpg";
import photo3 from "@/assets/champ3.jpg";

const photos = [photo1, photo2, photo3];

const competitionFeatures = [
  {
    icon: Award,
    title: "Champions nationaux",
    description:
      "Chaque année, notre club IKB remporte le championnat de France dans plusieurs disciplines et catégories depuis sa création.",
  },
  {
    icon: Target,
    title: "Champion MMA",
    description:
      "Actuellement, nous avons un champion en MMA : <strong>Elyes Belhoussa</strong>, <strong>invaincu 4-0 à 100% Fight en -60kg</strong>, qui vise à rejoindre l'UFC.",
  },
  {
    icon: Users,
    title: "Futurs champions",
    description:
      "Nous préparons activement d'autres athlètes pour devenir champions dans plusieurs disciplines.",
  },
];

const CompetitionSection = () => {
  return (
    <section id="competition" className="py-20 bg-background">
      <div className="container mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Résultats et Champions</h2>
          <p className="section-subtitle">
            Notre club IKB s'impose chaque année au plus haut niveau et forme les futurs champions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* Slider de photos du champion */}
          <div className="relative animate-fade-in">

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={{ clickable: true }}
              className="relative rounded-lg shadow-card md:max-w-md lg:max-w-lg max-w-sm  aspect-square"

            >
              {photos.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Champion photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Texte */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading text-3xl text-foreground mb-4 tracking-wide">
                Nos Résultats
              </h3>

              <div className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Depuis sa création, le club <strong>IKB</strong> est chaque année{" "}
                  <strong>champion de France</strong> dans plusieurs disciplines et catégories.
                </p>

                <p>
                  Parmi nos athlètes, <strong>Elyes Belhoussa</strong>, champion MMA{" "}
                  <strong>invaincu 4-0</strong> à 100% Fight (-60kg), vise aujourd’hui l’<strong>UFC</strong>.
                </p>

                <p>
                  Nous formons également la prochaine génération de champions dans plusieurs
                  disciplines.
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
                    <p
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
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
