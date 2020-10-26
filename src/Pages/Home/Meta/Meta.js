import React from 'react'
import css from './Meta.module.scss'
import Container from 'components/Grid/Container'
import Heading from 'components/Heading/Heading'
import CardMeta from 'components/Cards/CardMeta/CardMeta'
import IconPlay from 'assets/icons/IconPlay'

const Meta = ({ heading, descriptor, cards }) => {
  const renderCards = list => list.map((card, index) => <CardMeta {...card} key={`Meta card#${index}`} />)

  return (
    <section>
      <div className={css.frame}>
        <Container className={css.wrapper}>
          <Heading className={css.heading} label={heading} />
          <p className={css.descriptor} dangerouslySetInnerHTML={{ __html: descriptor }} />
          <ul className={css.list}>
            { renderCards(cards) }
          </ul>
          <button
            className={css.play}
            onClick={() => {}}
            type='button'
          >
            <IconPlay className={css.icon} />
            Переглянути відео
          </button>
        </Container>
      </div>
    </section>
  )
}

export default Meta
