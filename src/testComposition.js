import React, { Component } from 'react'
import Modal from './components/modal'
import HocTest from './components/hocTest'
import Header from './components/header'

export default class testComposition extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }

  handleMinusClick = () => {
    this.setState(prevState=>{
      return {
        number: prevState.number - 1
      }
    })
  }

  handlePlusClick = () => {
    this.setState(prevState=>{
      return {
        number: prevState.number + 1
      }
    })
  }
  
  render() {
    return (
      <div>
        <Header />
        <Modal>
          <HocTest 
            handleMinusClick={this.handleMinusClick}
            handlePlusClick={this.handlePlusClick}
            number={this.state.number}
          />
        </Modal>
      </div>
    )
  }
}
