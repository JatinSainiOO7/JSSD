import "../styles/application.css";
const navigation = () => {
  return (
    <>
      <section className="nav-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <p>JSSD.</p>
          </a>
        </div>
        <div className="center-links">
          <a href="/" className="links">
            <p>About</p>
          </a>
          <a href="/" className="links">
            <p>Work</p>
          </a>
          <a href="/" className="links">
            <p>p5-Lab</p>
          </a>
        </div>
        <div className="center-left-links">
          <a href="/" className="links">
            <p>Connect</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default navigation;
