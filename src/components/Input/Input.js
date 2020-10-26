import React from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'

const Input = ({
  className,
  register,
  name,
  defaultValue,
  placeholder,
  isError,
  type = 'text'
}) => {
  return (
    <input
      className={classnames(css.input, className, {
        [css.inputError]: isError
      })}
      ref={register}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default Input
