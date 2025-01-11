import "../styles/component.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Our Community</span>
          </h1>
          <p className="hero-description">
            A vibrant space where like-minded individuals connect, collaborate, and grow together. Whether you're here to learn, share, or simply belong, our community welcomes you with open arms.
          </p>
          <button className="cta-button">Join Us Today</button>
        </div>
      </header>

      <section className="features">
        <h2 className="section-title">Why Join Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Connect</h3>
            <p>Build meaningful relationships with people who share your interests and goals.</p>
          </div>
          <div className="card">
            <h3>Learn</h3>
            <p>Access exclusive resources, webinars, and workshops to enhance your skills.</p>
          </div>
          <div className="card">
            <h3>Grow</h3>
            <p>Collaborate on exciting projects and take your personal and professional growth to new heights.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <p>Become a part of something bigger. Join us today and make a difference in your journey.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
