import React, { useState } from 'react'
import css from './ModalDetails.module.scss'
import classnames from 'classnames'
import { data } from 'utils/data'
import { useDispatch } from 'react-redux'
import { toggleModal } from 'store/actions'
import { ModalThemes } from 'utils/const'
import IconClose from 'assets/icons/IconClose'
import ModalTable from 'components/ModalDetails/ModalTable/ModalTable'

const ModalDetails = ({ defaultTab = 0 }) => {
  const { heading, tabs } = data.modalDetails
  const [activeTab, setActiveTab] = useState({
    index: defaultTab,
    theme: tabs[defaultTab].theme
  })
  const dispatch = useDispatch()

  const renderSwitches = list => list.map(({ label, theme }, index) => (
    <li className={css.item} key={`Tab switch#${index}`}>
      <button
        className={classnames(css.trigger, {
          [css.triggerActive]: activeTab.index === index
        })}
        onClick={() => setActiveTab({
          index,
          theme
        })}
        type='button'
      >
        { label }
      </button>
    </li>
  ))

  const handleCloseModal = () => {
    dispatch(toggleModal(false, null))
  }

  return (
    <div className={classnames(css.wrapper, {
      [css.wrapperBlack]: activeTab.theme === ModalThemes.BLACK,
      [css.wrapperPurple]: activeTab.theme === ModalThemes.PURPLE,
    })}>
      <button
        className={css.buttonClose}
        onClick={handleCloseModal}
        type='button'
      >
        <IconClose className={css.iconClose} />
        Close modal
      </button>
      <div className={css.intro}>
        <h2
          className={css.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
        <ul className={css.list}>
          { renderSwitches(tabs) }
        </ul>
      </div>
      <ModalTable
        className={css.table}
        {...tabs[activeTab.index].table}
      />
    </div>
  )
}

export default ModalDetails
