import React, { Component } from 'react'

import { styles } from './styles.scss'

export default class Jumbotron extends Component {
  render () {
    return (
      <header className={styles}>
        <h1>Blueline</h1>
        <p>Next generation NHL stats analysis</p>
      </header>
    )
  }
}
