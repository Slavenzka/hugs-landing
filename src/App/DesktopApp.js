import React, { useEffect, useRef } from 'react'
import Routes from 'Pages/Routes'
import Header from 'components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalPaddingTop } from 'store/actions'
import { data } from 'utils/data'
import Footer from 'components/Footer/Footer'

const DesktopApp = () => {
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const fontSize = useSelector(state => state.elastic.curFontSize)
  const dispatch = useDispatch()
  const { header: headerData } = data

  const createHeaderRef = node => headerRef.current = node

  useEffect(() => {
    if (headerRef.current) {
      setTimeout(() => {
        dispatch(setGlobalPaddingTop(headerRef.current.getBoundingClientRect().height))
      }, 350)
    }
  }, [fontSize, dispatch])

  const handleScrollToForm = () => {
    const targetElement = formRef.current

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <>
      <Header
        onButtonClick={handleScrollToForm}
        createHeaderRef={createHeaderRef}
        data={headerData}
      />
      <main style={{ overflow: 'hidden' }}>
        <Routes />
      </main>
      <Footer />
    </>
  )
}

export default DesktopApp
