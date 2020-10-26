import React from 'react'
import css from './Button.module.scss'
import { ButtonPalettes, ButtonSizes } from 'utils/const'
import classnames from 'classnames'

const Button = ({
  className,
  handleClickButton,
  label,
  palette = ButtonPalettes.DARK,
  size = ButtonSizes.MEDIUM,
  type = 'button',
  url
}) => {
  const TagName = url ? 'a' : 'button'

  return (
    <TagName
      className={classnames(css.button, className, {
        [css.buttonLarge]: size === ButtonSizes.LARGE,
        [css.buttonMedium]: size === ButtonSizes.MEDIUM,
        [css.buttonSmall]: size === ButtonSizes.SMALL,
        [css.buttonSquare]: size === ButtonSizes.SQUARE,
        [css.buttonDark]: palette === ButtonPalettes.DARK,
        [css.buttonLight]: palette === ButtonPalettes.LIGHT,
        [css.buttonPale]: palette === ButtonPalettes.PALE,
        [css.buttonTransparent]: palette === ButtonPalettes.TRANSPARENT,
        [css.buttonHighlight]: palette === ButtonPalettes.HIGHLIGHT,
      })}
      href={url}
      onClick={url ? undefined : handleClickButton}
      type={url ? undefined : type}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  )
}

export default Button
