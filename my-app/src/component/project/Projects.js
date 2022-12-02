

import './Projects.css'

const Projects = (data, prop) => {

    

      const element = data.data.map(item => {
        console.log(item)
        const {projectName, id} = item
        return(
            <div className="project-item" key={id} onClick={(e)=>prop.onItem(e.target)}>
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