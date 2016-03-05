import '../assets/stylesheets/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  render () {
    return (
      <div className='commentBox'>
        <h1>Hello! I am a comment box</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('app')
)
