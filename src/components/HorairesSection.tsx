import { Clock, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "Mardi",
    sessions: [
      { time: "17h45 - 18h30", group: "Baby Karate (4-6 ans)" },
      { time: "18h30 - 19h30", group: "MMA (7-13 ans)" },
      { time: "19h30 - 21h30", group: "MMA (Ados-Adultes)" },
    ],
    locationName: "Piscine Les Malassis",
    locationAddress: "36 Rue Pierre et Marie Curie, Bagnolet",
    mapsUrl: "https://maps.google.com/?q=36+Rue+Pierre+et+Marie+Curie,+Bagnolet",
  },
  {
    day: "Mercredi",
    sessions: [
      { time: "17h45 - 18h30", group: "Baby Karate (4-6 ans)" },
      { time: "18h30 - 19h30", group: "Karaté enfants (7-13 ans)" },
      { time: "19h30 - 21h30", group: "MMA (Ados-Adultes)" },
    ],
    locationName: "Salle Joliot Curie",
    locationAddress: "78 Avenue de la Dhuys, Bagnolet",
    mapsUrl: "https://maps.google.com/?q=78+Avenue+de+la+Dhuys,+Bagnolet",
  },
  {
    day: "Samedi",
    sessions: [
      { time: "14h - 14h45", group: "Baby Karate (4-6 ans)" },
      { time: "14h45 - 15h45", group: "Karaté Enfants (7-13 ans)" },
      { time: "15h45 - 17h", group: "Karaté Enfants (Avancés)" },
      { time: "17h - 19h", group: "MMA (Ados-Adultes)" },
    ],
    locationName: "Gymnase Eugénie Cotton",
    locationAddress: "8 Rue Girardot, Bagnolet",
    mapsUrl: "https://maps.google.com/?q=8+Rue+Girardot,+Bagnolet",
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

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              {day.locationName && (
                <div className="text-sm text-center text-muted-foreground pb-4">
                  <a
                    href={day.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-center text-muted-foreground pb-4 flex items-center justify-center gap-2 hover:text-primary transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{day.locationName}</span>
                  </a>
                  <p className="text-xs mt-1">{day.locationAddress}</p>


                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorairesSection;
