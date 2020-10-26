import React from 'react'
import css from './Logo.module.scss'
import IconLogo from 'assets/icons/IconLogo'
import classnames from 'classnames'

const Logo = ({ className, isSmall }) => {
  return (
    <button
      className={classnames(css.logo, className, {
        [css.logoSmall]: isSmall
      })}
      onClick={() => {}}
      type='button'
    >
      HUGS Logo
      <IconLogo className={css.icon} />
    </button>
  )
}

export default Logo
