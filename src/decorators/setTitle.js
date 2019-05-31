import React, { Component } from 'react'

// 赋予组件设置页面标题的能力
// 虽然可以使用头部组件的属性来实现，但是最好一个方法、一个组件做一件事，而且其他页面需要的话也可以用到
const setTitle = ( pageTitle ) => (Comp) => {
  
  return class extends Component {

    componentDidMount() {
      document.title = pageTitle
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
  
}

export default setTitle