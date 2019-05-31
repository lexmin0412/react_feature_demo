import React, { Component } from 'react'
import setTitle from '../decorators/setTitle'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div>
        这是头部
      </div>
    )
  }
}

export default Header
