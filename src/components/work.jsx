import '../styles/application.css';
import '../styles/components.css';
import Sidebar from '../components/sidebar.jsx'
import Projects from '../components/projects';
import projects from '../components/project_data.js'
const worksection = () => {
  var buttonId = 'p5';
  // var newprojectItems = [];
  const filteredProjectId = projects.filter((item) => item.projectId === buttonId);
  var filteredProject = filteredProjectId.map((item) => filteredProject  = item);
  document.addEventListener('DOMContentLoaded', function() {
    var radioButton = document.querySelectorAll('.trcc-radio-project-filter');
    radioButton.forEach(function(item) {
      item.addEventListener('click', function() {
        radioButton.forEach(function(item) {
          item.classList.remove('active');
        });
        item.classList.add('active');
        console.log(item);
      });
    });
  });
  
  return (
    <>
    <div className='work-title'><p className='w-title'>Projects</p></div>
    <section className='work-section'>
      <section className="sidebar-section">
        <Sidebar />
      </section>
      <section className="work-hero-container">
        <Projects project = {filteredProject} />
      </section>
    </section>
    </>
  );
};

export default worksection;