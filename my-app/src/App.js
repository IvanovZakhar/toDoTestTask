import { useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Tasks from './component/tasks/Tasks';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import Projects from './component/project/Projects';
import './App.css';




function App () {
  const cyrillicToTranslit = new CyrillicToTranslit();
  const [project, setProject] = useState()
  const maxId = 1
  // const [data, setData] = useState([
  //       {projectName: 'VK',
  //        id: 0,
  //        tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //               {id: 1, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //               {id: 2, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''}] 
  //       },
  //       {projectName: 'YouTube',
  //        id: 1,
  //       tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} ]
  //      },  
       
  //     ]);
  const [tasks, setTasks] = useState() 
  // localStorage.data = JSON.stringify(
    
  //   [
  //           {projectName: 'VK',
  //            id: 0,
  //            tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: '', comments:[{id:0, name:'Ivan', comment:'жесть'}]},
  //                   {id: 1, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: '', coments:[]},
  //                   {id: 2, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: '', coments:[]}] 
  //           },
  //           {projectName: 'YouTube',
  //            id: 1,
  //           tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} ]
  //          },  
           
  //         ]

  // )


  // Сравниваем id и отправляем, то что совпадает по клику
    const onItem = (e) => {
      console.log(e)
      const data =  JSON.parse( localStorage.data )
      data.map(item => {
        if (item.id === e) {
          setTasks([item])
          localStorage.linkProject = "/" + cyrillicToTranslit.transform(item.projectName , '_').toLowerCase() 
          
        }
      })
   
    }


 
// Сохраняем задание через в localstorage

  const onChangeTask = (id, elem) => {
    console.log(id)
    console.log(elem)
    const data = JSON.parse( localStorage.data )
    data[id].tasks = elem
    localStorage.data = JSON.stringify([...data]) 
    console.log(data)
  }

  function getRoute () {

      
    const projects = localStorage.data ? JSON.parse( localStorage.data ) : localStorage.data = JSON.stringify( [{id: 0 , projectName: 'Добавьте свой первый проект'}]);
  
   return projects.map(item => {
           const {projectName, id} = item
           const linkProject = "/" + cyrillicToTranslit.transform(projectName , '_').toLowerCase()
    
           return(
                     
             <Route key={id} path={linkProject} element={<Tasks data={item} onChangeTask={onChangeTask}/>}/>
                    
                 
                 
           )
       })
   
}

const elem = getRoute()



  return (
    <div className="app">
      <Router>
        <Routes>
           <Route path="/" element={<Projects onItem={onItem} data={project}/> }/>
           {elem}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
