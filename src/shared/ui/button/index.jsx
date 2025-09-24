import classes from './index.module.scss'

export const Button = ({ children, onClick, className, disabled}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={[className, classes.button].join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  )
}