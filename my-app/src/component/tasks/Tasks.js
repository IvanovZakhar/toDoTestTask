
import { useState, useEffect } from 'react'
import './Tasks.css'



const Tasks = () => {

    const [numberTask, setNumberTask] = useState('')
    const [head, setHead] = useState('')
    const [descr, setDescr] = useState('')
    const [dateCreate, setDateCreate] = useState('')
    const [jobTime, setJobTime] = useState('')
    const [dateEnd, setDateEnd] = useState('')
    const [file, setFile] = useState('')


    useEffect(()=>{
        setNumberTask(localStorage.getItem('numberTask'))
        setHead(localStorage.getItem('head'))
        setDescr(localStorage.getItem('descr'))
        setDateCreate(localStorage.getItem('date-create'))
        
    }, [])



    useEffect(()=>{
        setJobTime(Date.now())
    }, [])

    const onChange = (e) => {
        
        const eventClassName = e.target.className
        switch(eventClassName){
            case 'numberTask':
                localStorage.setItem('numberTask', e.target.value)
                setNumberTask(localStorage.getItem('numberTask'))
                console.log(numberTask)
               
                console.log(jobTime)
  
              
                break
            case 'head':
                localStorage.setItem('head', e.target.value)
                setHead(localStorage.getItem('head'))
                console.log(head)
                break
            case 'descr':
                localStorage.setItem('descr', e.target.value)
                setDescr(localStorage.getItem('descr'))
                console.log(descr)
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
   
    return(
        <div className="Tasks">
            
                <label className='item'>
                     Номер задачи
                    <input className='numberTask' type="text" value={numberTask} onChange={onChange}/>
                </label>
                <label className='item'>
                    Заголовок
                    <input className='head' type="text" value={head} onChange={onChange}/>
                </label>
                <label className='item'>
                    Описание
                    <input className='descr' type="text" value={descr} onChange={onChange}/>
                </label >
                <label className='item'>
                    Дата создания
                    <input className='date-create' type="date" value={dateCreate} onChange={onChange}/>
                </label>
                <label className='item'>
                    Время в работе
                    {/* <input className='job-time' type="time" value={jobTime} onChange={onChange}/> */}
                </label>
                <label className='item'>
                    Дата окончания
                    <input className='date-end' type="date" value={dateEnd} onChange={onChange}/>
                </label>
                <label className='item'>
                    Приоритет
                    {/* <input className='priority' type="text" value={head} onChange={onChange}/> */}
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
                </label>

             
        </div>
    )
}



export default Tasks;
