import '../styles/components.css';
import projectimg from'../assets/images/projecttemimg.jpg'
const Projects = () => {
  return (
    <>
    <section className="project-card ">
      <div className="project">
        <img className='project-img' src={projectimg} />
      </div>
      <div className="project-title">
        <p>Perlin Noise Background</p>
      </div>
      <div className="project-description p">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit fugi?</p>
      </div>
      <div className="project-button p-button">Visit</div>
    </section>
    </>
  )
};

export default Projects;