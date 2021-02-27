import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  /**
   * Our array of tasks.
   * 
   * Do not try to alter using `push()`, use `setTasks()` instead.
   */
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor\'s appointment',
      day: 'Feb 5th, 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 6th, 13:45',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th, 14:40',
      reminder: false,
    }
  ])

  /**
   * Adds a task
   */
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  /**
   * Deletes a task
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  /**
   * Toggle reminder for a task
   */
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder: !task.reminder
        } : task
      )
    )
  }

  return ( // has to return a single element
    <div className="container">
      <Header title='track your stuff'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      { // if `showAddTask` is true show the component
        showAddTask && <AddTask onAdd={addTask} /> // simple way to do a ternary without an else
      }
      {// if there is at least one task show the tasks
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : ( // else display message
            <p>No tasks here, start by adding one!</p>
          )
      }

    </div>
  );
}

export default App;
