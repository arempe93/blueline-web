import React, { Component } from 'react'
import { Link } from 'react-router'

import { styles } from './styles.scss'

export default class Navbar extends Component {
  render () {
    return (
      <nav className={`${styles}`}>
        <div className='container'>
          <Link to='/' className='title'>
            Blueline
          </Link>
          <ul className='list float-right'>
            <li>
              <Link to='/' className='link'>
                Teams
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Players
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Standings
              </Link>
            </li>
            <li>
              <Link to='/' className='link'>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
