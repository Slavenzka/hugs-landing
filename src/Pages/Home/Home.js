import React from 'react'
import MainBanner from 'Pages/Home/MainBanner/MainBanner'
import { data } from 'utils/data'
import Meta from 'Pages/Home/Meta/Meta'
import Account from 'Pages/Home/Account/Account'
import Portfolio from 'Pages/Home/Portfolio/Portfolio'
import Company from 'Pages/Home/Company/Company'
import Strategies from 'Pages/Home/Strategies/Strategies'
import Team from 'Pages/Home/Team/Team'
import Prices from 'Pages/Home/Prices/Prices'
import Promotion from 'Pages/Home/Promotion/Promotion'
import ContactForm from 'Pages/Home/ContactForm/ContactForm'

const Home = () => {
  const {
    banner,
    meta,
    account,
    portfolio,
    company,
    strategies,
    team,
    prices,
    promotion
  } = data

  return (
    <>
      <MainBanner {...banner} />
      <Meta {...meta} />
      <Account {...account} />
      <Portfolio {...portfolio} />
      <Company {...company} />
      <Strategies {...strategies} />
      <Team {...team} />
      <Prices {...prices} />
      <Promotion {...promotion} />
      <ContactForm />
    </>
  )
}

export default Home
