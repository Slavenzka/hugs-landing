import React from 'react'
import css from './Company.module.scss'
import Container from 'components/Grid/Container'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'

const Company = ({
  heading,
  list,
  link
}) => {
  const renderListItems = list => list.map(({ key, isMore, value }, index) => (
    <div
      className={css.item}
      key={`Company list item#${index}`}
    >
      <dt className={css.key}>
        {isMore && <span className={css.more}>></span>}
        { key }
      </dt>
      <dd className={css.value}>
        { value }
      </dd>
    </div>
  ))

  return (
    <section className={css.section}>
      <Container className={css.wrapper}>
        <Heading
          className={css.heading}
          label={heading}
          palette={HeadingPalettes.LIGHT}
        />
        <dl className={css.list}>
          { renderListItems(list) }
        </dl>
        <a
          className={css.link}
          href={link.url}
          dangerouslySetInnerHTML={{ __html: link.label }}
        />
      </Container>
    </section>
  )
}

export default Company
