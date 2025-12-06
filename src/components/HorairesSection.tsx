import { Clock } from "lucide-react";

const scheduleData = [
  {
    day: "Mardi",
    sessions: [
      { time: "17h45 - 18h30", group: "Baby Karate (4-6 ans)" },
      { time: "18h30 - 19h00", group: "Karaté Enfants (7-13 ans)" },
      { time: "19h30 - 21h00", group: "Boxe pied/poing & MMA" },
    ],
    location: "Salle de sport de la piscine Les Malassis, Bagnolet",
  },
  {
    day: "Samedi",
    sessions: [
      { time: "17h45 - 18h30", group: "Baby Karate (4-6 ans)" },
      { time: "18h30 - 19h00", group: "Karaté Enfants (7-13 ans)" },
      { time: "19h30 - 21h00", group: "Boxe pied/poing & MMA" },
    ],
    location: "Gymnase Eugénie Cotton, Bagnolet",
  },
];

const HorairesSection = () => {
  return (
    <section id="horaires" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">
            <Clock className="inline-block mr-3 h-10 w-10 text-primary" />
            Horaires des Cours
          </h2>
          <p className="section-subtitle">
            Retrouvez nos horaires d'entraînement pour tous les âges et niveaux (créneaux supplémentaires pour la préparation aux passages de grade et à la compétition)
          </p>


        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {scheduleData.map((day, index) => (
            <div
              key={day.day}
              className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-hover transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-secondary py-4 px-6">
                <h3 className="font-heading text-2xl text-secondary-foreground tracking-wider">
                  {day.day}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {day.sessions.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="border-l-4 border-primary pl-4"
                  >
                    <p className="font-bold text-foreground">{session.time}</p>
                    <p className="text-muted-foreground text-sm">{session.group}</p>
                  </div>
                ))}
              </div>
              {day.location && (
                <p className="text-sm text-center text-muted-foreground pb-4">
                  📍 {day.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorairesSection;
