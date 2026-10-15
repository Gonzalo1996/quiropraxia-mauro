
import FeatureCard from "@/components/ui/feature-card";
import BusinessHours from "@/components/ui/business-hours";

const cardsData = [
  {
    title: "Formación profesional",
    description:
      "Lorem ipsum dolor sit amet consectet adipissed do eiusmod tempor inc ididunt utidlabore.",
  },
  {
    title: "Servicios",
    description:
      "Lorem ipsum dolor sit amet consectet adipissed do eiusmod tempor inc ididunt utidlabore.",
  },
  {
    title: "Matrícula profesional",
    description:
      "Lorem ipsum dolor sit amet consectet adipissed do eiusmod tempor inc ididunt utidlabore.",
  },
];

export default function ServicesAndSchedule() {
  return (
    <section className="services-schedule-section">
      <div className="services-schedule-container">
        <div className="feature-cards-grid">
          {cardsData.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="profile-schedule">
          <div className="profile-content">
            
            <h2 className="profile-title">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet.
            </h2>

            <p className="profile-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                laboris nisi ut aliquip. Commodo consequat.
            </p>

            <p className="profile-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
                laboris nisi ut aliquip. Commodo consequat. Sed do eiusmod tempor incidid unt labore et
                dolore magna aliqua.
            </p>

            <div className="profile-professional">
              <div className="profile-avatar">
                <span>MC</span>
              </div>

              <div>
                <h3>Mauricio Cantero</h3>
                <p>Quiropráctico</p>
              </div>
            </div>
          </div>

          <aside className="profile-hours">
            <BusinessHours phone="(+01) - 234 567 890" />
          </aside>
        </div>
      </div>
    </section>
  );
}