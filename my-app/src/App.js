import { Component, useState, useEffect } from 'react';
import Projects from './component/project/Projects';
import Tasks from './component/tasks/Tasks';
import './App.css';




function App () {
  const maxId = 1
  const [data, setData] = useState([]);

  
  // useEffect(() => {
  //   localStorage.data = JSON.stringify([
  //     {projectName: 'VK',
  //      id: 0,
  //      tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №1', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //             {id: 1, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''},
  //             {id: 2, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK №2', dateCreate: '', jobTime: '', dataEnd: '', file: ''}] 
  //     },
  //     {projectName: 'YouTube',
  //      id: 1,
  //     tasks: [{id: 0, numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} ]
  //    },  
     
  //   ]) 
  //   setData
  // }, [data])

  useEffect(()=>{
    setData([JSON.parse( localStorage.data )])
  }, [])


   const [tasks, setTasks] = useState([]) 


    const onItem = (e) => {
      const dats =  JSON.parse( localStorage.data )
      dats.map(item => {
        if (item.id === e) {
      
          setTasks([item])
        }
      })
    }
 

  const onChangeTask = (id, elem) => {
    console.log(elem)
    setData(data => {
      data[id].tasks = {...elem}
      
      localStorage.setItem(data, [...data] )
      console.log(...data)
      return [...data] 
      
    })
   

  }


  console.log(JSON.parse( localStorage.data ))
  console.log(data)
  return (
    <div className="App">
        <Projects data={data} onItem={onItem}/>
        <Tasks data={tasks} onChangeTask={onChangeTask}/>
    </div>
  
  );
}

export default App;
