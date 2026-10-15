import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Mauro Cantero Quiropraxia.
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempor incididunt ut labore et dolore magna. Lorem ipsum 
          dolor sit amet, consectetur adipisicing elit. Tempor incididunt 
          ut labore et dolore magna.
        </p>

      <div className="hero-buttons"> 
        <Button 
          href="https://wa.me/549XXXXXXXXXX"
          external
          className="hero-button-whatsapp"
          > 
          Primera Visita
        </Button> 
        <Button
          href="/quienes-somos"
          variant="primary"
          className="hero-button-about" 
        >
          Sobre nosotros 
        </Button> 
      </div>
      </div>
    </section>
  );
}