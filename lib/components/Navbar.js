import '../../assets/stylesheets/components/_navbar.scss'

import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className='navigation'>
        <div className='container'>
          <Link to='/' className='navigation-title'>
            Blueline
          </Link>
          <ul className='navigation-list float-right'>
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
