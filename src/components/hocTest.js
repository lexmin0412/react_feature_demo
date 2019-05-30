import React, { Component } from 'react'

class NumberSelector extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { number, handleMinusClick, handlePlusClick } = this.props
    return (
      <div className='number-selector-container'>
        <div className='minus-btn'
          onClick={handleMinusClick}
        >-</div>
        <div className='number-display'>
          {number}
        </div>
        <div className='plus-btn'
          onClick={handlePlusClick}
        >+</div>
      </div>
    )
  }
}

export default NumberSelector
