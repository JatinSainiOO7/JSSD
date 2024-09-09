import "../styles/application.css";

const herosection = () => {
  return (
    <section className="hero-section display-flex">
      <section className="p5-container hero-size"></section>
      <section className="hero-container hero-size">
        <div className="hero">
          <p>Hi, my name is Jatin Saini and I am creative Front-End Developer...</p>
        </div>
        <div className="hero-buttons , display-flex">
          <div className="hero-button">Resume</div>
          <div className="hero-button">Visit</div>
        </div>
      </section>
    </section>
  );
};

export default herosection;
