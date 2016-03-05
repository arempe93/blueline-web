import '../assets/stylesheets/index.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div className='main'>
        <h1>Hello! Welcome to my app</h1>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component {
  render () {
    return (
      <h3>About</h3>
    )
  }
}

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
