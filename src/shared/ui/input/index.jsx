import React from 'react'
import classes from './index.module.scss'

export const Input = ({value, onChange, placeholder, type, disabled}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={classes.input}
      disabled={disabled}
    />
  )
}