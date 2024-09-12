import '../styles/application.css';
import Sidebar from '../components/sidebar';
import Projects from '../components/projects';
import projects from '../components/project_data.js'
const worksection = () => {
  return (
    <>
    <div className='work-title'><p className='w-title'>Projects</p></div>
    <section className='work-section'>
      <section className="sidebar-section">
        <Sidebar />
      </section>
      <section className="work-hero-container">
        <Projects project = {projects} />
      </section>
    </section>
    </>
  );
};

export default worksection;