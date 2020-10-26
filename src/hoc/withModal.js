import React, { useEffect, useRef } from 'react'
import css from './withModal.module.scss'
import classnames from 'classnames'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useSelector } from 'react-redux'

const withModal = WrappedComponent => {
  return props => {
    const modalRef = useRef(null)
    const modal = useSelector(state => state.ui.modal)
    const { status, content } = modal

    const createModalRef = node => modalRef.current = node

    useEffect(() => {
      if (status && modalRef.current) {
        disableBodyScroll(modalRef.current, {
          reserveScrollBarGap: true,
        })
      } else {
        clearAllBodyScrollLocks()
      }
    }, [status])

    return (
      <>
        <div
          className={classnames(css.wrapper, {
            [css.wrapperOpened]: status
          })}
          ref={createModalRef}
        >
          { content }
        </div>
        <WrappedComponent {...props} />
        </>
    )
  }
}

export default withModal
