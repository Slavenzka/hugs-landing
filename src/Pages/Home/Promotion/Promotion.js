import React from 'react'
import css from './Promotion.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import { ButtonSizes } from 'utils/const'

const Promotion = ({ heading, descriptor, hint, button }) => {
  return (
    <section className={css.section}>
      <Container className={css.container}>
        <Heading
          className={css.heading}
          label={heading}
        />
        <p
          className={css.descriptor}
          dangerouslySetInnerHTML={{ __html: descriptor }}
        />
        <p
          className={css.hint}
          dangerouslySetInnerHTML={{ __html: hint }}
        />
        <Button
          className={css.button}
          handleClickButton={() => {}}
          label={button.label}
          size={ButtonSizes.MEDIUM}
        />
      </Container>
    </section>
  )
}

export default Promotion
