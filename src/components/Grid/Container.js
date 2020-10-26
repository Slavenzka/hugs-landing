import React from 'react'
import css from './Grid.module.scss'
import classnames from 'classnames'

const Container = ({ children, className }) => {
  return (
    <div
      className={classnames(css.container, className)}
    >
      { children }
    </div>
  )
}

export default Container
