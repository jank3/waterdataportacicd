import React, {Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/index.js'

const Main = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </Fragment>
)

export default Main