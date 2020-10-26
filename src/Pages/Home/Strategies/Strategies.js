import React from 'react'
import css from './Strategies.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'

const Strategies = ({
  heading,
  descriptor,
  image,
  legend
}) => {
  const renderLegend = list => list.map(({ label, link }, index) => (
    <li className={css.item} key={`Strategies legend item#${index}`}>
      <p className={css.content} dangerouslySetInnerHTML={{ __html: label }} />
      {link &&
        <a
          className={css.link}
          href={link.url}
        >
          { link.label }
        </a>
      }
    </li>
  ))

  return (
    <section className={css.section}>
      <Container className={css.wrapper}>
        <Heading
          className={css.heading}
          label={heading}
        />
        <p
          className={css.descriptor}
          dangerouslySetInnerHTML={{ __html: descriptor }}
        />
        <img
          className={css.chart}
          src={image}
          alt='Приклад графіків стратегій'
        />
        <ul className={css.list}>
          { renderLegend(legend) }
        </ul>
      </Container>
    </section>
  )
}

export default Strategies
