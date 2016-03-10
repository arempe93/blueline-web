import '../../../assets/stylesheets/pages/_home.scss'

import React from 'react'

import StatsBanner from '../StatsBanner'

export default class Home extends React.Component {
  render () {
    return (
      <main>
        <header>
          <h1>Blueline</h1>
          <p>Next generation NHL stats analysis</p>
        </header>
        <StatsBanner />
       </main>
    )
  }
}
