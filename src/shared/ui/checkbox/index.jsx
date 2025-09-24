import React from 'react'
import classes from './index.module.scss'

export const Checkbox = ({onChange, checked}) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      className={classes.checkbox}
      checked={checked}
    />
  )
}
