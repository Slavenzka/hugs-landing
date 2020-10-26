import React from 'react'
import css from './CardPrice.module.scss'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'
import classnames from 'classnames'
import Button from 'components/Button/Button'
import { ButtonSizes, DeviceTypes } from 'utils/const'

const CardPrice = ({
  type,
  bgColor,
  passive,
  active,
  tag = 'li',
  handleClickDetails,
  handleClickOrder,
  deviceType
}) => {
  const { price, purpose } = passive
  const { old, new: newPrice, label } = price
  const { list, buttons } = active
  const TagName = tag

  const renderDetails = list => list.map(({ key, value }, index) => (
    <div className={css.itemDetails} key={`Card details item#${index}`}>
      <dt
        className={css.key}
        dangerouslySetInnerHTML={{ __html: key }}
      />
      <dd
        className={css.value}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  ))

  const renderButtons = buttons => buttons.map(({ type, palette, label }, index) => (
    <Button
      className={css.button}
      label={label}
      palette={palette}
      size={ButtonSizes.MEDIUM}
      handleClickButton={type === 'details' ? handleClickDetails : handleClickOrder}
      key={`Control button ${index}`}
    />
  ))

  return (
    <TagName
      className={css.card}
      onClick={deviceType === DeviceTypes.ADAPTIVE ? handleClickDetails : undefined}
    >
      <div className={css.cardInner}>
        <div
          className={css.cardFront}
          style={{ backgroundColor: bgColor }}
        >
          <span className={css.label}>
            Тарифний пакет
          </span>
          <Heading
            className={css.heading}
            label={type}
            tag='h3'
            palette={HeadingPalettes.LIGHT}
          />
          {newPrice &&
            <ul className={css.priceList}>
              {old &&
                <li className={classnames(css.priceItem, css.priceItemOld)}>
                  { old }
                </li>
              }
              <li className={css.priceItem}>
                { newPrice }
              </li>
            </ul>
          }
          {label &&
            <p
              className={css.priceLabel}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          }
          <p
            className={css.purpose}
            dangerouslySetInnerHTML={{ __html: purpose }}
          />
        </div>
        <div
          className={css.cardBack}
          style={{ backgroundColor: bgColor }}
        >
          <p
            className={css.type}
            dangerouslySetInnerHTML={{ __html: type }}
          />
          <dl className={css.listDetails}>
            { renderDetails(list) }
          </dl>
          <div className={css.controls}>
            { renderButtons(buttons) }
          </div>
        </div>
      </div>
    </TagName>
  )
}

export default CardPrice
