import "../styles/components.css";

const sidebar = () => {

  
let projects_list = ["p5.js", "React", "Three.js", "Api_app", "portfolios", "Open-Sorce", "C++", "Gsap", "Fractals"];
// let projects_list = [];
  return (
    <>
      <div className="sidebar-container sticky-top ">
      <div className="sector button trcc-radio-project-filter">
              <p>All</p>
          </div>
        {projects_list.length === 0 && <h1>List was Emty</h1>}
      {projects_list.map((item) => (
          <div key={item} className="sector button trcc-radio-project-filter">
              <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default sidebar;
