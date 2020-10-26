import React from 'react'
import css from './MainBanner.module.scss'
import Container from 'components/Grid/Container'
import Button from 'components/Button/Button'
import { ButtonPalettes, ButtonSizes, DeviceTypes } from 'utils/const'
import { useSelector } from 'react-redux'

const MainBanner = ({ heading, descriptor, slogan, buttonLabel, hint, tickers }) => {
  const globalPadding = useSelector(state => state.ui.globalPaddingTop)
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const deviceType = useSelector(state => state.elastic.deviceType)

  const renderTickers = list => {
    const tickersList = deviceType === DeviceTypes.DESKTOP ? list : list.slice(0, 3)

    return tickersList.map((item, key) => (
      <li className={css.item} key={`Main banner ticker#${key}`}>
        { item }
      </li>
    ))
  }

  return (
    <section className={css.section}>
      <Container>
        <div
          className={css.wrapper}
          style={{ paddingTop: `calc(${globalPadding * fontSize / 10}px + ${deviceType === DeviceTypes.DESKTOP ? `15rem` : `1.4rem`})` }}
        >
          <h1 className={css.title}>
            { heading }
          </h1>
          <p className={css.descriptor}>
            { descriptor }
          </p>
          <p className={css.slogan}>
            { slogan }
          </p>
          <Button
            className={css.button}
            label={buttonLabel}
            size={ButtonSizes.LARGE}
            palette={ButtonPalettes.DARK}
            handleClickButton={() => {}}
          />
          <p className={css.hint}>
            { hint }
          </p>
        </div>
      </Container>
      <div className={css.line}>
        <Container>
          <ul className={css.list}>
            { renderTickers(tickers) }
          </ul>
        </Container>
      </div>
    </section>
  )
}

export default MainBanner
