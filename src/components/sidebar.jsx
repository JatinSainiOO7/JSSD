import "../styles/components.css";

const sidebar = () => {
let projects_list = ["All","p5.js", "React", "Three.js", "Api_app", "portfolios", "Open-Sorce", "C++", "Gsap", "Fractals"];
  return (
    <>
      <div className="sidebar-container sticky-top ">
      {projects_list.map((item) => (
          <button key={item} className="sector button trcc-radio-project-filter radio-button">{item}</button>
        ))}
      </div>
    </>
  );
};

export default sidebar;
