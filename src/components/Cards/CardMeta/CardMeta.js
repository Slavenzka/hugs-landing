import React from 'react'
import css from './CardMeta.module.scss'
import classnames from 'classnames'

const CardMeta = ({ className, label, icon, iconSize, iconPosition, tag = 'li' }) => {
  const TagName = tag
  return (
    <TagName
      className={classnames(css.card, className)}
      style={{
        backgroundImage: `url("${icon}")`,
        backgroundSize: iconSize,
        backgroundPosition: iconPosition
      }}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default CardMeta
