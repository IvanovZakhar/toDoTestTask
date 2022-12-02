import { Component, useState, useEffect } from 'react';
import Projects from './component/project/Projects';
import Tasks from './component/tasks/Tasks';
import './App.css';




function App () {
  const [maxId, setMaxId] = useState(3)
  const[data, setData] = useState([
      {projectName: 'VK',
       id: 1,
       tasks: [{numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
              {numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''}] 
      },
      {projectName: 'YouTube',
       id: 2,
      tasks: {numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} 
     },  
     
    ]);

   const [tasks, setTasks] = useState([]) 

  //  useEffect(() => {
  //   console.log(tasks)
  //  }, [tasks])
  

    const onItem = (e) => {
      const result = data.map(item => {
        if (item.id === e) {
          setTasks([item])
        
        }
      
      })
    }
 

  return (
    <div className="App">
        <Projects data = {data} onItem={onItem}/>
        <Tasks data={tasks}/>
    </div>
  
  );
}

export default App;
