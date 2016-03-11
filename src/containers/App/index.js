import React, { Component } from 'react'

import './styles/app.scss'

import Navbar from 'components/Navbar'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }

  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
