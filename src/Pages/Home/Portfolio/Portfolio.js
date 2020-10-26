import React from 'react'
import css from './Portfolio.module.scss'
import Container from 'components/Grid/Container'
import Heading, { HeadingTypes } from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import { ButtonSizes } from 'utils/const'
import CalculatorForm from 'Pages/Home/Portfolio/CalculatorForm/CalculatorForm'

const Portfolio = ({ heading, descriptor, subheading, form, resultLabel, buttonLabel }) => {
  return (
    <section>
      <Container className={css.wrapper}>
        <Heading
          className={css.heading}
          label={heading}
        />
        <p className={css.descriptor}>
          { descriptor }
        </p>
        <Heading
          className={css.subheading}
          label={subheading}
          type={HeadingTypes.SUBHEADING}
        />
        <CalculatorForm
          className={css.form}
          items={form}
          resultLabel={resultLabel}
        />
        <Button
          className={css.button}
          label={buttonLabel}
          handleClickButton={() => {}}
          size={ButtonSizes.MEDIUM}
        />
      </Container>
    </section>
  )
}

export default Portfolio
