import Counter from "@/components/ui/counter";

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stat-item">
          <img
            src="/images/stats/personas-exp.png"
            alt=""
          />

          <h3>
            <Counter target={1200} />
          </h3>

          <p>Personas que se atendieron</p>
        </div>

        <div className="stat-item">
          <img
            src="/images/stats/quiropractico-exp.png"
            alt=""
          />

          <h3>
            <Counter target={5} />
          </h3>

          <p>Años de experiencia <br /> como quiropráctico</p>
        </div>

        <div className="stat-item">
          <img
            src="/images/stats/kinesiologia-exp.png"
            alt=""
          />

          <h3>
            <Counter target={19} />
          </h3>

          <p>Años de experiencia <br />como kinesiologo</p>
        </div>

      </div>
    </section>
  );
}