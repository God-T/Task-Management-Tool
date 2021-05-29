import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": 3,
      "text": "Go shopping",
      "day": "Feb 8th at 7:30pm",
      "reminder": false
    }
  ])

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
    console.log('delete', id)
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handleDeleteTask} /> : 'No Tasks!'}

    </div>
  )
}

export default App
