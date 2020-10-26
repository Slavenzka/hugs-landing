import React, { useEffect, useRef, useState } from 'react'
import css from './Header.module.scss'
import Container from 'components/Grid/Container'
import Logo from 'components/Logo/Logo'
import classnames from 'classnames'
import { useSelector } from 'react-redux'
import { ButtonPalettes, ButtonSizes, DeviceTypes } from 'utils/const'
import Navigation from 'components/Navigation/Navigation'
import Button from 'components/Button/Button'
import IconBurger from 'assets/icons/IconBurger'
import IconClose from 'assets/icons/IconClose'
import Social from 'components/Social/Social'
import Copyright from 'components/Copyright/Copyright'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const HeaderTypes = {
  ABSOLUTE: 'absolute',
  FIXED: 'fixed',
  HIDDEN_ABSOLUTE: 'hiddenAbsolute',
  HIDDEN_FIXED: 'hiddenFixed'
}

const AdaptiveMenuStatuses = {
  HIDDEN: 'hidden',
  VISIBLE: 'visible'
}


const HEADER_ABSOLUTE_TO_HIDDEN = 150
const HEADER_HIDDEN_TO_FIXED = 300

const Header = ({ createHeaderRef, onButtonClick, data }) => {
  const deviceType = useSelector(state => state.elastic.deviceType)
  const [adaptiveMenuStatus, setAdaptiveMenuStatus] = useState(false)
  const headerRef = useRef(null)
  const adaptiveMenuRef = useRef(null)
  const [headerType, setHeaderType] = useState(HeaderTypes.ABSOLUTE)
  const { navigation, button } = data

  const createRef = node => {
    createHeaderRef(node)
    headerRef.current = node
  }

  const createAdaptiveMenuRef = node => adaptiveMenuRef.current = node

  useEffect(() => {
    let scrollPosition = 0

    const controlHeaderState = () => {
      const newPosition = window.pageYOffset
      const isScrollingDown = newPosition > scrollPosition
      const isScrollingUp = newPosition < scrollPosition

      if (
        newPosition > HEADER_ABSOLUTE_TO_HIDDEN
        && newPosition < HEADER_HIDDEN_TO_FIXED
        && isScrollingDown
      ) {
        setHeaderType(HeaderTypes.HIDDEN_ABSOLUTE)
      }

      if (
        newPosition > HEADER_ABSOLUTE_TO_HIDDEN
        && newPosition < HEADER_HIDDEN_TO_FIXED
        && isScrollingUp
      ) {
        setHeaderType(HeaderTypes.HIDDEN_FIXED)
      }

      if (
        newPosition <= HEADER_ABSOLUTE_TO_HIDDEN
        && isScrollingUp
      ) {
        setHeaderType(HeaderTypes.ABSOLUTE)
      }

      if (
        newPosition >= HEADER_HIDDEN_TO_FIXED
        && isScrollingDown
      ) {
        setHeaderType(HeaderTypes.FIXED)
      }

      scrollPosition = newPosition
    }

    if (deviceType === DeviceTypes.DESKTOP) {
     document.addEventListener('scroll', controlHeaderState)
    }

    return () => document.removeEventListener('scroll', controlHeaderState)
  }, [deviceType])

  const handleClickBurger = () => {
    setAdaptiveMenuStatus(AdaptiveMenuStatuses.VISIBLE)
    disableBodyScroll(adaptiveMenuRef.current)
  }

  const handleCloseMenu = () => {
    setAdaptiveMenuStatus(AdaptiveMenuStatuses.HIDDEN)
    clearAllBodyScrollLocks()
  }

  const isFixed = headerType === HeaderTypes.FIXED || headerType === HeaderTypes.HIDDEN_FIXED

  return (
    <header
      className={classnames(css.header, {
        [css.headerHiddenAbsolute]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.HIDDEN_ABSOLUTE,
        [css.headerHiddenFixed]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.HIDDEN_FIXED,
        [css.headerFixed]: deviceType === DeviceTypes.DESKTOP && headerType === HeaderTypes.FIXED
      })}
      ref={createRef}
    >
      <Container className={css.wrapper}>
        <Logo
          className={classnames({
            [css.logoDark]: isFixed
          })}
        />
        <button
          className={css.buttonBurger}
          onClick={handleClickBurger}
          type='button'
        >
          Показати меню
          <IconBurger className={css.icon} />
        </button>
        <div
          className={classnames(css.menu, {
            [css.menuVisible]: adaptiveMenuStatus === AdaptiveMenuStatuses.VISIBLE,
            [css.menuHidden]: adaptiveMenuStatus === AdaptiveMenuStatuses.HIDDEN
          })}
          ref={createAdaptiveMenuRef}
        >
          <div className={css.adaptiveTop}>
            <Container className={css.adaptiveWrapper}>
              <Logo isSmall />
              <button
                className={css.buttonClose}
                onClick={handleCloseMenu}
                type='button'
              >
                Закрыть меню
                <IconClose className={css.iconClose} />
              </button>
            </Container>
          </div>
          <Navigation
            className={css.navigation}
            list={navigation}
            isDark={isFixed}
          />
          <Button
            className={css.button}
            label={button.label}
            size={ButtonSizes.SMALL}
            palette={isFixed ? ButtonPalettes.DARK : ButtonPalettes.TRANSPARENT}
            handleClickButton={onButtonClick}
          />
          <div className={css.adaptiveBottom}>
            <Container>
              <Social
                className={css.social}
              />
              <Copyright className={css.copyright} />
            </Container>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
