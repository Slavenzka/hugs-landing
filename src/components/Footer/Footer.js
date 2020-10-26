import React from 'react'
import css from './Footer.module.scss'
import Container from 'components/Grid/Container'
import Social from 'components/Social/Social'
import Copyright from 'components/Copyright/Copyright'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.wrapper}>
        <Social className={css.social} isDark />
        <Copyright className={css.copyright} />
      </Container>
    </footer>
  )
}

export default Footer
