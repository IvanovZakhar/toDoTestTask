import { Component, useState, useEffect } from 'react';
import Projects from './component/project/Projects';
import Tasks from './component/tasks/Tasks';
import './App.css';




function App () {
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
  const [tasks, setTasks] = useState([]) 
  // localStorage.data = JSON.stringify(
    
  //   [
  //           {projectName: 'VK',
  //            id: 0,
  //            tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //                   {id: 1, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //                   {id: 2, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''}] 
  //           },
  //           {projectName: 'YouTube',
  //            id: 1,
  //           tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} ]
  //          },  
           
  //         ]

  // )



  // Сравниваем id и отправляем, то что совпадает по клику
    const onItem = (e) => {
      const data =  JSON.parse( localStorage.data )
      data.map(item => {
        if (item.id === e) {
          setTasks([item])
        }
      })
    }
 
// Сохраняем задание через в localstorage

  const onChangeTask = (id, elem) => {
    const data = JSON.parse( localStorage.data )
    data[id].tasks = elem
    localStorage.data = JSON.stringify([...data]) 
  }

  return (
    <div className="App">
        <Projects onItem={onItem}/>
        <Tasks data={tasks} onChangeTask={onChangeTask}/>
    </div>
  
  );
}

export default App;
