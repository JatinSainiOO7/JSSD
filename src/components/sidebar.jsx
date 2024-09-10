import "../styles/components.css";

const sidebar = () => {
  return (
    <>
      <div className="sidebar-container sticky-top ">
        <div className="sector button trcc-radio-project-filter">
          <p>All</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>p5.js</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>React</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>Three.js</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>Api</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>Portfolio</p>
        </div>
        <div className="sector button trcc-radio-project-filter">
          <p>E-comerss</p>
        </div>
      </div>
    </>
  );
};

export default sidebar;
