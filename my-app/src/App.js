import { Component, useState, useEffect } from 'react';
import Projects from './component/project/Projects';
import './App.css';




function App () {
  const [maxId, setMaxId] = useState(3)
  const[data, setData] = useState([
      {projectName: 'VK',
       id: 1,
       tasks: {numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание VK', dateCreate: '', jobTime: '', dataEnd: '', file: ''} 
      },
      {projectName: 'YouTube',
       id: 2,
      tasks: {numberTask: 1, head: 'заголовочек', descr: 'Это тестовое задание YouTube', dateCreate: '', jobTime: '', dataEnd: '', file: ''} 
     },  
    ]);

    const onItem = (e) => {
      console.log(e)
    }

  return (
    <div className="App">
        <Projects data={data} onItem={onItem}/>
        
    </div>
  
  );
}

export default App;
