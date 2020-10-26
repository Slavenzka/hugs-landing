import React, { useState } from 'react'
import css from './Prices.module.scss'
import Container from 'components/Grid/Container'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'
import classnames from 'classnames'
import CardPrice from 'components/Cards/CardPrice/CardPrice'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from 'store/actions'
import ModalDetails from 'components/ModalDetails/ModalDetails'
import { DeviceTypes } from 'utils/const'

const Prices = ({ heading, descriptor, tabs, notification }) => {
  const [activeTab, setActiveTab] = useState(0)
  const deviceType = useSelector(state => state.elastic.deviceType)
  const dispatch = useDispatch()

  const handleClickDetails = tabIndex => {
    dispatch(toggleModal(true, <ModalDetails defaultTab={tabIndex} />))
  }

  const renderTabTriggers = list => (
    <ul className={css.triggers}>
      {list.map(({ trigger }, index) => (
        <li
          className={css.trigger}
          key={`Prices tab trigger#${index}`}
        >
          <button
            className={classnames(css.button, {
              [css.buttonActive]: activeTab === index
            })}
            onClick={() => setActiveTab(index)}
            type='button'
          >
            { trigger }
          </button>
        </li>
      ))}
    </ul>
  )

  const renderTabContent = list => {
    return (
      <ul
        className={css.list}
        style={{
          gridTemplateColumns: deviceType === DeviceTypes.DESKTOP
            ? `repeat(${list[activeTab].content.length}, 1fr)`
            : '100%',
          height: deviceType === DeviceTypes.DESKTOP
            ? `calc(100vw / ${list[activeTab].content.length})`
            : 'auto'
        }}
      >
        {list[activeTab].content.map((item, index) => (
          <CardPrice
            {...item}
            handleClickDetails={() => handleClickDetails(activeTab)}
            deviceType={deviceType}
            key={`Price tab card#${index}`}
          />
        ))}
      </ul>
    )
  }

  return (
    <section className={css.section}>
      <Container>
        <Heading
          className={css.heading}
          label={heading}
          palette={HeadingPalettes.DARK}
        />
        <p
          className={css.descriptor}
          dangerouslySetInnerHTML={{ __html: descriptor }}
        />
        {tabs.length > 1 && renderTabTriggers(tabs)}
      </Container>
      { renderTabContent(tabs) }
      <Container>
        <p
          className={css.notification}
          dangerouslySetInnerHTML={{ __html: notification }}
        />
      </Container>
    </section>
  )
}

export default Prices
