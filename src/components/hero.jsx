import "../styles/application.css";
// import Box from '../p5/box.js'

const herosection = () => {
  return (
    <section className="hero-section display-flex">
      <section className="p5-container hero-size">
        {/* <Box /> */}
      </section>
      <section className="hero-container hero-size">
        <div className="hero">
          <p>
          Hi, my name is Jatin Saini and I am Front-End Developer and Learn p5.js..
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
