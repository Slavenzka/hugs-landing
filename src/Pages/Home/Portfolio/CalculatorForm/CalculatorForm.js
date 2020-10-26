import React from 'react'
import css from './CalculatorForm.module.scss'
import classnames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import SelectStandard from 'components/SelectStandard/SelectStandard'
import Button from 'components/Button/Button'
import { ButtonPalettes, ButtonSizes } from 'utils/const'

const CalculatorForm = ({
  className,
  items,
  resultLabel
}) => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  const renderFormElements = list => list.map((item, index) => {
    switch (item.type) {
      case 'button': return (
        <Button
          className={css.button}
          label={item.label}
          size={ButtonSizes.SQUARE}
          palette={ButtonPalettes.HIGHLIGHT}
          type='submit'
          key={`Calculator form submit button`}
        />
      )
      default:
        const { name, label, options } = item
        return (
          <Controller
            as={SelectStandard}
            control={control}
            name={name}
            label={label}
            options={options}
            defaultValue={options.find(item => item.isDefault)}
            key={`Calculator form item#${index}`}
          />
        )
    }
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classnames(css.wrapper, className)}>
        { renderFormElements(items) }
        <div className={css.results}>
          <p className={css.label}>
            { resultLabel }
          </p>
          <p className={css.value}>
            $ 25 000
          </p>
        </div>
      </div>
    </form>
  )
}

export default CalculatorForm
