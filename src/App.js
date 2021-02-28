import { useState, useEffect } from 'react' // useEffect is often used to do something right after the page loads
import { BrowserRouter as Router, Route } from 'react-router-dom' // need this if you want to route to different pages
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  /**
   * Our array of tasks.
   * 
   * Do not try to alter using `push()`, use `setTasks()` instead.
   */
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const serverTasks = await fetchTasks()
      setTasks(serverTasks) // add the tasks to our state
    }

    getTasks()
  }, [])

  /**
   * Fetches all of the tasks from the backend
   */
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  /**
   * Fetches a single task from the backend
   */
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()

    return data
  }

  /**
   * Adds a task
   */
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', {
      method: 'POST',
      headers: { // specify the type of content we are sending
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task) // send the content after converting it to json
    })

    const data = await res.json() // get the new task that was added

    setTasks([...tasks, data]) // ...tasks = existing tasks, data = the task we want to add
  }

  /**
   * Deletes a task
   */
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  /**
   * Toggle reminder for a task
   */
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id) // get the task we want to toggle
    const toggledTask = { ...taskToToggle, reminder: !taskToToggle.reminder } // create a task toggled to the opposite of what we got

    // update the server with the changed data
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT', // put because we are updating
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(toggledTask)
    })

    const data = await res.json() // get the data we just sent

    setTasks( // update the UI to reflect the backend
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder: data.reminder
        } : task
      )
    )
  }

  return ( // has to return a single element
    // wrap all in `<Router>` if you need to route
    <Router>
      <div className="container">
        <Header title='track your stuff'
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* if we are exactly in the root show AddTask and TaskList */}
        <Route path='/' exact render={(props) => (
          <>
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
          </>
        )} />
        {/* if we are in the about page only show About */}
        <Route path='/about' component={About} />
        {/* show the footer regardless of which page we are in */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
