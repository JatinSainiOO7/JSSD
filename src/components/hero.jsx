import "../styles/application.css";

const herosection = () => {
  return (
    <section className="hero-section display-flex">
      <section className="p5-container hero-size"></section>
      <section className="hero-container hero-size">
        <div className="hero">
          <p>
          Hi, my name is <a className="j" href="/">Jatin</a> and I am Front-End Developer and Learn  <a className="p5" href="/">p5.js</a>..
          </p>
        </div>
        <div className="hero-buttons , display-flex">
          <a href="/">
            <div className="hero-button">Resume</div>
          </a>
          <a href="https://github.com/JatinSainiOO7">
            <div className="hero-button">github</div>
          </a>
        </div>
      </section>
    </section>
  );
};

export default herosection;
