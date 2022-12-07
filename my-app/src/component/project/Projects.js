import { useState } from 'react';
import './Projects.css'

const Projects = (props) => {
    
    const {onItem} = props;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const addProject = (e) => {
        const projects = JSON.parse( localStorage.data );
        console.log(JSON.parse( localStorage.data ))
        const elem = {
            projectName: e.target.form.children[1].value,
            id: projects.length,
            tasks: [ 
                {id: 0, numberTask: '', head: '', descr: '', dateCreate: today, jobTime: '', dataEnd: '', file: ''}
            ]
           
        }
        localStorage.data = JSON.stringify([...projects, elem]) 

    }
    
   function onProject () {

      
         const projects = localStorage.data ? JSON.parse( localStorage.data ) : localStorage.data = JSON.stringify( [{id: 0 , projectName: 'Добавьте свой первый проект'}]);
       
        return projects.map(item => {
                const {projectName, id} = item
                return(
                    <div className="project-item" key={id} onClick={()=>onItem(id)}>
                        {projectName}
        
                    </div>
                )
            })
        
    }

    const element = onProject()
    console.log(element )

    return (
        <div className="Projects">
            {element}
            <form action='/'>
                    <label>Добавить проект</label>
                    <input type="text" />
                    <button onClick={(e)=> addProject(e)}>Добавить</button>
            </form>
        </div>
    )
}

export default Projects;