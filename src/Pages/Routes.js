import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'Pages/Home/Home'

export const HOME_PAGE = '/'

// TODO apply async import of page components to split the initial js chunk
const Routes = () => {
  return (
    <Switch>
      <Route path={HOME_PAGE} component={Home} />
    </Switch>
  )
}

export default Routes
