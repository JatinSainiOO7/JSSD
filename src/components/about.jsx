import "../styles/application.css";

const aboutsection = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <div className="about-img">
            <div className="about-img-con"></div>
          </div>
          <div className="about-discr">
            <p>
            Hey there! I am Jatin, a front-end developer with a deep passion for building interactive, visually stunning, and performance-driven websites. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to 
            life while ensuring that every website I create is optimized for both functionality and aesthetics.
            </p>
            <p>
             <a className ="about-button"href="/">About me.</a>
            </p>
          </div>
        </div>
        <div className="skills-section">
          <div className="skills-container"></div>
        </div>
      </section>
    </>
  );
};

export default aboutsection;
