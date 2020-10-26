import React, { useState } from 'react'

const withSwiper = WrappedComponent => {
  return props => {
    const [controlledSwiper, setControlledSwiper] = useState(null)
    const [swiperStatus, updateSwiperStatus] = useState({
      isBeginning: true,
      isEnd: false
    })

    const onSlideChange = swiper => {
      if (swiper.isBeginning) {
        updateSwiperStatus({
          isBeginning: true,
          isEnd: false
        })
      }

      if (swiper.isEnd) {
        updateSwiperStatus({
          isBeginning: false,
          isEnd: true
        })
      }

      if (
        !swiper.isBeginning
        && !swiper.isEnd
        && (swiperStatus.isBeginning || swiperStatus.isEnd)
      ) {
        updateSwiperStatus({
          isBeginning: false,
          isEnd: false
        })
      }
    }

    const goPrev = () => {
      if (controlledSwiper) {
        controlledSwiper.slidePrev()
      }
    }

    const goNext = () => {
      if (controlledSwiper) {
        controlledSwiper.slideNext()
      }
    }

    return (
      <WrappedComponent
        {...props}
        goNext={goNext}
        goPrev={goPrev}
        onSlideChange={onSlideChange}
        setControlledSwiper={setControlledSwiper}
        swiperStatus={swiperStatus}
      />
    )
  }
}

export default withSwiper
