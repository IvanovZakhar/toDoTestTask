
import { useState, useEffect } from 'react'
import './Tasks.css'



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
       if( props.data[0]){
        setData(props.data[0].tasks)
    
       }
    }, [props.data])

// Добавляем новое задание 
const OnAddTask = () => {
    const elem = 
        {   
            id: props.data[0].tasks.length, 
            numberTask: '', 
            head: '', 
            descr: '', 
            dateCreate: '', 
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
                    data[id] = { ...data[id], descr: e.target.value }
                    return [...data]
                  })
                break
            case 'date-create':
                localStorage.setItem('date-create', e.target.value)
                setDateCreate(localStorage.getItem('date-create'))

                console.log(dateCreate)
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

console.log(data)
    const element = data.map(item => {
        const {numberTask, head, descr} = item
        return(
           
            <div className='task' key={item.id}  >
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
                {/* <label className='item'>
                    Дата создания
                    <input className='date-create' type="date" value={dateCreate} onChange={onChange}/>
                </label>
                <label className='item'>
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
                </label>
                <label className='item'>
                    Коментарии
                    <div>Тут должны быть коментики каскадные</div>
                </label> */}
                <button onClick={() => onChangeTask(props.data[0].id, [...data])}>Сохранить задание</button>
            </div>
          
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
