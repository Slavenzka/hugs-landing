import React from 'react'
import css from './Account.module.scss'
import Container from 'components/Grid/Container'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'

const Account = ({ heading, descriptor, hint }) => {
  return (
    <section className={css.section}>
      <Container>
        <Heading
          className={css.heading}
          label={heading}
          palette={HeadingPalettes.LIGHT}
        />
        <p className={css.descriptor}>
          { descriptor }
        </p>
        <p className={css.hint}>
          { hint }
        </p>
      </Container>
    </section>
  )
}

export default Account
