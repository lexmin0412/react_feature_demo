import React, { Component } from 'react'
import setTitle from './setTitle'

@setTitle
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

export default setTitle(Header, '标题')
