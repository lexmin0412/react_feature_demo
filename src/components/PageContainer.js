import React, { Component } from 'react'
import Header from './header'

export default class PageContainer extends Component {
  render() {
    const { children } = this.props
    console.log(this.props)
    return (
      <div>
        <Header title="头部标题" />
        {children}
      </div>
    )
  }
}
