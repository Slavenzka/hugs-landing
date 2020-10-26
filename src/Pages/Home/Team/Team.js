import React from 'react'
import css from './Team.module.scss'
import Container from 'components/Grid/Container'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import withSwiper from 'hoc/withSwiper'
import SwiperCore, { Controller, EffectFade } from 'swiper'
import classnames from 'classnames'
import IconNext from 'assets/icons/IconNext'
import Button from 'components/Button/Button'

SwiperCore.use([Controller, EffectFade])

const Team = ({
  heading,
  list,
  // props from hoc
  swiperStatus,
  goNext,
  goPrev,
  onSlideChange,
  setControlledSwiper
}) => {
  const { isBeginning, isEnd } = swiperStatus

  const renderSlides = list => list.map(({ subheading, sublist, photo, hint, link }, index) => (
      <SwiperSlide
        tag='li'
        key={`Team slide#${index}`}
      >
        <div className={css.slide}>
          <img className={css.photo} src={photo} alt={`Фотографія ${subheading}`} />
          <Heading
            className={css.heading}
            label={heading}
            palette={HeadingPalettes.LIGHT}
          />
          <p
            className={css.name}
            dangerouslySetInnerHTML={{ __html: subheading }}
          />
          <ul className={css.list}>
            { sublist.map((item, key) => (
              <li
                className={css.item}
                dangerouslySetInnerHTML={{ __html: item }}
                key={`Slide sublist item#${key}`}
              />
            )) }
          </ul>
          <p className={css.hint} dangerouslySetInnerHTML={{ __html: hint }} />
          <Button
            className={css.link}
            label={link.label}
            url={link.url}
          />
        </div>
      </SwiperSlide>
  ))

  return (
    <section className={css.section}>
      <Container className={css.container}>
        <Swiper
          onSwiper={setControlledSwiper}
          id='team-slider'
          wrapperTag='ul'
          slidesPerView={1}
          allowTouchMove={false}
          onSlideChange={onSlideChange}
          autoHeight={true}
          effect='fade'
          fadeEffect={{
            crossFade: true
          }}
        >
          { renderSlides(list) }
        </Swiper>
        {list.length > 1 &&
          <>
            <button
              className={classnames(css.button, css.buttonPrev, {
                [css.buttonDisabled]: isBeginning
              })}
              onClick={goPrev}
              type='button'
            >
              <IconNext className={css.icon} />
              Предыдущий слайд
            </button>
            <button
              className={classnames(css.button, css.buttonNext, {
                [css.buttonDisabled]: isEnd
              })}
              onClick={goNext}
              type='button'
            >
              <IconNext className={css.icon} />
              Следующий слайд
            </button>
          </>
        }
      </Container>
    </section>
  )
}

export default withSwiper(Team)
