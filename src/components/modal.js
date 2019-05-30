import React, { Component } from 'react'

class Modal extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const {children} = this.props
    return (
      <div>
        <div>这是modal组件的标题</div>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default Modal