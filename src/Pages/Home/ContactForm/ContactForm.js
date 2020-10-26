import React from 'react'
import css from './ContactForm.module.scss'
import { useForm } from 'react-hook-form'
import Input from 'components/Input/Input'
import Heading, { HeadingPalettes } from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import Container from 'components/Grid/Container'

const InputInfo = {
  NAME: {
    name: `contact-form-name`,
    type: 'text',
    placeholder: `Ім'я`
  },
  PHONE: {
    name: `contact-form-phone`,
    type: 'tel',
    placeholder: `Телефон`
  },
  EMAIL: {
    name: `contact-form-email`,
    type: 'email',
    placeholder: `Email`
  },
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const renderInputs = list => list.map(({ name, type, placeholder }, index) => (
    <Input
      className={css.input}
      name={name}
      register={register}
      type={type}
      placeholder={placeholder}
      key={`Contact form input#${index}`}
    />
    ))

  return (
    <section className={css.section}>
      <Container className={css.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={css.wrapper}>
            <Heading
              label='Безкоштовна консультація'
              palette={HeadingPalettes.LIGHT}
            />
            <p
              className={css.descriptor}
              dangerouslySetInnerHTML={{ __html: `З&rsquo;явилися питання щодо типів інвеcтірованія, вибору тарифу або потрібна додаткова інформація? Заповніть форму і&nbsp;наш менеджер зв&rsquo;яжеться з&nbsp;Вами` }}
            />
            { renderInputs(Object.values(InputInfo)) }
            <Button
              className={css.button}
              label='Надіслати'
            />
          </div>
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
