

import './Projects.css'

const Projects = (props) => {
   
    const {onItem} = props;
    const data = JSON.parse( localStorage.data );
      const element = data.map(item => {
        const {projectName, id} = item
        return(
            <div className="project-item" key={id} onClick={()=>onItem(id)}>
                {projectName}
            </div>
        )
      })

    return (
        <div className="Projects">
            {element}
        </div>
    )
}

export default Projects;