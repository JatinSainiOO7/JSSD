import "../styles/application.css";
import "../styles/components.css";
import Sidebar from "../components/sidebar.jsx";
import Projects from "../components/projects";
import projects from "../components/project_data.js";
const worksection = () => {
  let projects_list = ["All","p5.js", "React", "Three.js", "Api_app", "portfolios", "Open-Sorce", "C++", "Gsap", "Fractals"];
  var radioButton = document.querySelectorAll(".trcc-radio-project-filter");
  radioButton.forEach(function (item) {
    item.addEventListener("click", function () {
      radioButton.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
      console.log(item);
    });
  });

  var buttonId = "p5";
  // var newprojectItems = [];
  const filteredProjectId = projects.filter(
    (item) => item.projectId === buttonId
  );
  var filteredProject = filteredProjectId.map(
    (item) => (filteredProject = item)
  );

  return (
    <>
      <div className="work-title">
        <p className="w-title">Projects</p>
      </div>
      <section className="work-section">
        <section className="sidebar-section">
          <Sidebar projects_list = {projects_list} handleButton={()=>console.log("fuck")}/>
        </section>
        <section className="work-hero-container">
          <Projects project={filteredProject} />
        </section>
      </section>
    </>
  );
};

export default worksection;
