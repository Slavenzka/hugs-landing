import React from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'

export const HeadingPalettes = {
  DARK: 'dark',
  LIGHT: 'light'
}

export const HeadingTypes = {
  HEADING: 'heading',
  SUBHEADING: 'subheading'
}

const Heading = ({
  className,
  label,
  tag = 'h2',
  palette = HeadingPalettes.DARK,
  type = HeadingTypes.HEADING
}) => {
  const TagName = tag
  return (
    <TagName
      className={classnames(css.title, className, {
        [css.titleLight]: palette === HeadingPalettes.LIGHT,
        [css.subtitle]: type === HeadingTypes.SUBHEADING
      })}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default Heading
