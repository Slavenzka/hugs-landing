import React, { useEffect, useRef } from 'react'
import css from './Navigation.module.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
import { setScrollingStatus, setVisibleBanner } from 'store/actions'
import classnames from 'classnames'

const Navigation = ({ className, list, isDark }) => {
  const dispatch = useDispatch()
  const visibleID = useSelector(state => state.ui.visibleID)
  const isScrolling = useRef(false)

  useEffect(() => {
    let timeout = null

    const catchScrollEnd = () => {
      if (isScrolling.current) {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
          isScrolling.current = false
          dispatch(setScrollingStatus(false))
        }, 150)
      }
    }

    document.addEventListener('scroll', catchScrollEnd)

    return () => document.removeEventListener('scroll', catchScrollEnd)
  }, [dispatch])

  const navigationItems = list.map(({label, id}, index) => (
    <li className={css.item} key={`Header navigation item#${index}`}>
      <Link
        to={`#${id}`}
        scroll={el => {
          isScrolling.current = true
          dispatch(setScrollingStatus(true))
          dispatch(setVisibleBanner(id))
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }}
        className={classnames(css.link, {
          [css.linkActive]: visibleID === id,
          [css.linkDark]: isDark
        })}
      >
        { label }
      </Link>
    </li>
  ))

  return (
    <nav className={className}>
      <ul className={css.list}>
        { navigationItems }
      </ul>
    </nav>
  )
}

export default Navigation
