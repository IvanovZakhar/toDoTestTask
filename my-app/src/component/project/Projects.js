
import {Link} from 'react-router-dom';

import CyrillicToTranslit from 'cyrillic-to-translit-js';
import './Projects.css'

const Projects = (props) => {
    const cyrillicToTranslit = new CyrillicToTranslit();
   
    const {onItem} = props;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const addProject = (e) => {
        const projects = JSON.parse( localStorage.data );
      
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
               const {projectName, id, tasks} = item
               const linkProject = "/" + cyrillicToTranslit.transform(projectName , '_').toLowerCase()
        
               return(
       
     
                           <Link to={linkProject} key={id} onClick={ () => onItem(id)} className="project">
                               <span >{projectName}</span> 
                           </Link>

                     
               )
           })
       
   }
    

    const element = onProject()


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