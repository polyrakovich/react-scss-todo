import React from 'react'
import classes from './index.module.scss'
import { TodoItem } from '@/entities/index.js'

export const TodoList = ({tasks, setTasks}) => {
  return (
    tasks.length
      ? <ul
      className={classes.todoList}
    >
      {tasks.map((task) => (
        <TodoItem
          setTasks={setTasks}
          key={task.id}
          task={task}
          tasks={tasks}
        />
      ))}
    </ul>
      : <h1>Add your first task!</h1>
  )
}