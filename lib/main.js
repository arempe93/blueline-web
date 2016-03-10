import '../assets/stylesheets/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App.js'
import Home from './components/pages/Home.js'

render(
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
)
