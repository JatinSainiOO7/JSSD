
import PropTypes from 'prop-types';
import '../styles/components.css';
// import projectimg from'../assets/images/projecttemimg.jpg'
const Projects = ({project}) => {
  return (
    <div>
      {
        project.map( item =>{
          return (
            <section className="project-card" key={item.id}>
            <div className="project">
              <img className='project-img' src={item.img} />
            </div>
            <div className="project-title">
              <p>{item.title}</p>
            </div>
            <div className="project-description p">
              <p>{item.description}</p>
            </div>
            <div className="project-button">
              <a className='p-button' href={item.link}>Visit</a>
            </div>
          </section>
          )
        })
      }
    </div>
  );
};

Projects.propTypes = {
  project: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    projectId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
