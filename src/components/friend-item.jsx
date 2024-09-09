import "../styles/application.css";

const friendItem = () => {
  return (
    <>
      <div className="friend-item-section">
        <div className="frind-zoom">
          <a href="/">
            <div className="friend-image"></div>
          </a>
        </div>
        <div className="friend-bio">
          <p>
            LSam Griffith connects Creative Coding with Enviromentalism (2024)
          </p>
        </div>
      </div>
    </>
  );
};

export default friendItem;
