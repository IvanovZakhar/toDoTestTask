import { useState } from 'react';
import './Projects.css'

const Projects = (props) => {
    
    const {onItem} = props;
  
    const addProject = (e) => {
        const elem = {
            projectName: e.target.form.children[1].value,
            id: projects.length,
            tasks: [ 
                {id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: ''}
            ]
           
        }
        localStorage.data = JSON.stringify([...projects, elem]) 

    }
    const projects = JSON.parse( localStorage.data );
    const element = projects.map(item => {
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
            <form action='#'>
                    <label>Добавить проект</label>
                    <input type="text" />
                    <button onClick={(e)=> addProject(e)}>Добавить</button>
            </form>
        </div>
    )
}

export default Projects;