import React, { useState } from 'react'
import { Button, Input } from '@/shared/index.js'
import classes from './index.module.scss'

export const TodoForm = ({tasks, setTasks}) => {
  const addTaskToList = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  const [newTask, setNewTask] = useState('');

  const createNewTaskObject = (e) => {
    e.preventDefault();
    if(newTask) {
      const newTaskObject = {
        id: Date.now(),
        body: newTask,
        completed: false,
      }
      addTaskToList(newTaskObject);
      setNewTask('');
    }

  }
  return (
    <form
      className={classes.form}
      onSubmit={createNewTaskObject}
    >
      <Input
        placeholder='Add your task here...'
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button
        onClick={createNewTaskObject}
        className={classes.submitButton}
      >
        <img src='/icons/plus-icon.svg' alt='Add New Task' />
      </Button>


    </form>
  )
}
