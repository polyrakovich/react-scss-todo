import classes from './index.module.scss'
import { Button, Checkbox } from '@/shared/index.js'
import React from 'react'

export const TodoItem = ({task, tasks, setTasks}) => {
 const toggleTask = (id) => {
   setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
 }
 const removeTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id));
 }
  return (
      <li className={classes.todoItem}>
          <div className={classes.todoItem__content}>
              <Checkbox
                onChange={() => toggleTask(task.id)}
                checked={task.completed}
              />
            <span className={task.completed ? classes.completed : ''}>
                {task.body}
              </span>
          </div>
        <Button
          onClick={() => removeTask(task.id)}
          className={classes.deleteButton}>
          <img src='/icons/bin-icon.svg' alt='Remove task' />
        </Button>
      </li>
  )
}