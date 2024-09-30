import "../styles/components.css";

const sidebar = ({projects_list,handleButton}) => {

  return (
    <>
      <div className="sidebar-container sticky-top ">
      {projects_list.map((item) => (
          <button key={item} className="sector button trcc-radio-project-filter radio-button"
          onClick={handleButton(item)}>{item}</button>
        ))}
      </div>
    </>
  );
};

export default sidebar;
