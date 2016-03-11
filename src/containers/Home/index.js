import React, { Component } from 'react'

import Jumbotron from 'components/Jumbotron'
import StatsBanner from 'components/StatsBanner'

export default class Home extends Component {
  render () {
    return (
      <main>
        <Jumbotron />
        <StatsBanner />
       </main>
    )
  }
}
