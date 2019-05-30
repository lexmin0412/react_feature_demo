import React, { Component } from 'react'

// 赋予组件设置页面标题的能力
const setTitle = (Comp, pageTitle) => {
  
  class NewComponent extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      document.title = pageTitle
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
  return NewComponent
  
}

export default setTitle