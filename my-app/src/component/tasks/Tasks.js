
import { useState, useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import redBgTask from '../../img/red.png';

import './Tasks.css';



const Tasks = (props) => {
    const [data, setData] = useState([])
    const {onChangeTask} = props;

    const [numberTask, setNumberTask] = useState('')
    const [head, setHead] = useState('')
    const [descr, setDescr] = useState('')
    const [dateCreate, setDateCreate] = useState('')
    const [jobTime, setJobTime] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [file, setFile] = useState('')


  
// Устанавливаем задание пришедшие по клику в нашу data
    useEffect(()=>{
        setData(props.data.tasks)
    }, [])

// Добавляем новое задание 
const OnAddTask = () => {
   
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const elem = 
        {   
            id: props.data.tasks.length, 
            numberTask: '', 
            head: '', 
            descr: '', 
            dateCreate:  today , 
            jobTime: '', 
            dataEnd: '', 
            file: ''
        }
    setData(data => {
        return [...data, elem]
    })
}
   
 

    const onChange = (e, id) => {
        
        const eventClassName = e.target.className
        switch(eventClassName){
            case 'numberTask':
                setData(data => {
                    data[id] = { ...data[id], numberTask: `${e.target.value}` }
                    return [...data] 
                  })

                break
            case 'head':
                setData(data => {
                    data[id] = { ...data[id], head: e.target.value }
                    return [...data]
                  })
                break
            case 'descr':
                setData(data => {
                    data[id] = { ...data[id], dateCreate: e.target.value }
                    return [...data]
                  })
                break
            case 'date-create':
                setData(data => {
                    data[id] = { ...data[id], descr: e.target.value }
                    return [...data]
                  })
                break
            case 'job-time':
                
                console.log(jobTime)

                break
            case 'date-end':
                setDateEnd(e.target.value)
                console.log(dateEnd)
                break
            case 'file':
                setFile(e.target.value)
                console.log(file)
                break   
            default:
                setHead('')
        }
    }


    const element = data.map(item => {
        const {numberTask, head, descr, dateCreate, comments} = item
        const elementComments = comments ? comments.map(item =>{
            const {id, name, comment} = item;
           return(
         <div className='comment' key={id}>
            <h6>{name}</h6>
            <span>{comment}</span>
         </div>
           )
        }): null;
        console.log(item.id)
        return(
           
            <DragDropContainer targetKey={item.id} key={item.id} onDrop={(e) => console.log(e.target) } >
                   
                    <div className='task'  >
                                <div className='itemTask'>
                                    <label className='item'>
                                            Номер задачи
                                        
                                        <input className='numberTask' type="text" value={numberTask} onChange={(e) => onChange(e, item.id)} key={item.id}/>
                                    </label>
                                    <label className='item'>
                                        Заголовок
                                        <input className='head' type="text" value={head} onChange={(e) => onChange(e, item.id)}/>
                                    </label>
                                    <label className='item'>
                                        Описание
                                        <input className='descr' type="text" value={descr} onChange={(e) => onChange(e, item.id)}/>
                                    </label >
                                    <label className='item'>
                                        Дата создания
                                        <div>{dateCreate}</div>
                                    </label>
                                    {/* <label className='item'>
                                        Время в работе
                                        <input className='job-time' type="time" value={jobTime} onChange={onChange}/>
                                    </label>
                                    <label className='item'>
                                        Дата окончания
                                        <input className='date-end' type="date" value={dateEnd} onChange={onChange}/>
                                    </label>
                                    <label className='item'>
                                        Приоритет
                                        <input className='priority' type="text" value={head} onChange={onChange}/>
                                    </label>
                                    <label className='item'>
                                        Вложения
                                        <input className='file' type="file" value={file} onChange={onChange}/>
                                    </label>
                                    <label className='item'>
                                        Текущий статус
                                        <div className='status'>
                                            <h5>Queue</h5> 
                                            <h5>Development</h5> 
                                            <h5>Done</h5>
                                        </div>
                                    </label>
                                    <label className='item'>
                                        Подзадачи
                                        <div>Тут должна быть возможность добавлять подзадачи</div>
                                    </label> */}
                                    {/* <div className='item'>
                                        {elementComments}
                                        <div >
                                            <label>Добавить коментарий</label>
                                            <input type="text" name="name" placeholder="Ваше имя"/>
                                            <input type="text" name="comment" placeholder="Ваше коментарий"/>
                                            <button onClick={(e)=> addComment(e)}>Добавить</button>
                                        </div>
                                    </div> */}
                                    <button className='saveTaskBtn' onClick={() => onChangeTask(props.data.id, [...data])}>Сохранить задание</button>
                                </div>
                            
                            </div>
                 
               
                        
            </DragDropContainer>
          
        )
    })
  
    return(
        <div className="Tasks">
            {element}
         
       
              <button className='btn-addATask' onClick={OnAddTask}>Добавить задачу</button>
         
        </div>
    )
}





export default Tasks;
