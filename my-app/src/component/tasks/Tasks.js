
import { useState } from 'react'
import './Tasks.css'



const Tasks = () => {
    const [nameValue, setNameValue] = useState('')
    const [headValue, setHeadValue] = useState('')
    const onChange = (e) => {
        const eventClassName = e.target.className
        switch(eventClassName){
            case 'numberTask':
                setNameValue(e.target.value)
                console.log(nameValue)
                break
            case 'head':
                setHeadValue(e.target.value)
                console.log(headValue)
                break
            default:
                setHeadValue()
        }
    }

    return(
        <div className="Tasks">
            <form >
                <label>
                     Номер задачи
                    <input className='numberTask' type="text" value={nameValue} onChange={onChange}/>
                </label>
                <label>
                     Заголовок
                    <input className='head' type="text" value={headValue} onChange={onChange}/>
                </label>
        
             </form>
        </div>
    )
}

export default Tasks;
