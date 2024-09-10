import '../styles/application.css';
import Sidebar from '../components/sidebar';
import Projects from '../components/projects';
const worksection = () => {
  return (
    <>
    <div className='work-title'><p className='w-title'>Projects</p></div>
    <section className='work-section'>
      <section className="sidebar-section">
        <Sidebar />
      </section>
      <section className="work-hero-container">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </section>
    </section>
    </>
  );
};

export default worksection;