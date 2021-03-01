import { FaTimes } from 'react-icons/fa'
import { FiBell } from 'react-icons/fi'
import { FiBellOff } from 'react-icons/fi'
import Button from './Button'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>
                {
                    task.reminder ?
                        <FiBellOff style={{ color: 'black', cursor: 'pointer' }}
                            onClick={() => onToggle(task.id)} />
                        :
                        <FiBell style={{ color: 'steelblue', cursor: 'pointer' }}
                            onClick={() => onToggle(task.id)}
                        />
                }
                {task.text}
                <FaTimes style={{
                    color: 'red',
                    cursor: 'pointer'
                }}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
