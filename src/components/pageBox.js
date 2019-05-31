import React, { Component } from 'react'
import Header from './header'

const PageBox = ( Comp, pageTitle ) => {
  
  class NewComponent extends Component {
  
    constructor(props) {
      super(props)
      this.state = {}
    }
  
    componentDidMount() {
      
    }
    
    render() {
      const { children } = this.props
      return (
        <div>
          <Header />
          {
            children
          }
        </div>
      )
    }
  }
  return NewComponent
}


export default PageBox
