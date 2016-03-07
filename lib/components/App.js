import React from 'react'

import Navbar from './Navbar.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}