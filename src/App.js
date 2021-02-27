import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
   * This function deletes a task.
   */
  const deleteTask = (id) => {
    //setTasks(tasks.filter() =>)
  }

  return ( // has to return a single element
    <div className="container">
      <Header title='Track your Stuff' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
