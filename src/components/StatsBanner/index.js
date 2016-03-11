import React, { Component } from 'react'
import { Link } from 'react-router'

import * as axios from 'axios'

import { styles } from './styles.scss'

class StatsBanner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: 10,
      stats: 20,
      games: 30
    }
  }

  componentDidMount () {
    axios.get('http://localhost:4001/api/dashboard')
      .then((response) => {
        this.setState(response.data.data);
      })
  }

  render () {
    return (
      <section className={styles}>
        <div className='container'>
          <div className='row'>
            <div className='column stats'>
              <h3>{this.state.players}</h3>
              <p>Players</p>
            </div>
            <div className='column stats'>
              <h3>{this.state.stats}</h3>
              <p>Stats</p>
            </div>
            <div className='column stats'>
              <h3>{this.state.games}</h3>
              <p>Games</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default StatsBanner
