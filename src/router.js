import React, {Component} from 'react'
import {Route,Switch} from 'react-router-dom'

import Landing from './components/Landing/Landing'
import Shop from './components/Shop/Shop'
import Details from './components/Details/Details'
import Cart from './components/Cart/Cart'


class Router extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/shop' component={Shop} />
          <Route path='/details/:name' component={Details} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    )
  }
}

export default Router
