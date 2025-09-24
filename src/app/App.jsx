import '@/app/styles/main.scss'
import { TodoForm } from '@/entities/index.js'
import { useEffect, useState } from 'react'
import { TodoList } from '@/wigets/index.js'
import {compareArrs} from '@/shared/utils/compareArrs/index.js'

const getTodosFromStorage = () => {
  return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
};
const setTodosToStorage = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

function App() {

  const [tasks, setTasks] = useState(getTodosFromStorage())
  useEffect(() => {
      if(!compareArrs(tasks, getTodosFromStorage())) {
        setTodosToStorage(tasks);
      }
    }, [tasks])

  return (
        <div className='app'>
          <TodoForm tasks={tasks} setTasks={setTasks} />
          <TodoList tasks={tasks} setTasks={setTasks} />
        </div>
  )
}

export default App
