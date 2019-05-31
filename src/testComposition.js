import React, { Component } from 'react'
import Modal from './components/modal'
import HocTest from './components/hocTest'
import Header from './components/header'
import { MyComponent2, MyComponent3 } from './components/decorators'
import setTitle from './decorators/setTitle'
import PageContainer from './components/PageContainer';

@setTitle('这是标题')
class testComposition extends Component {

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
      // <div>
      //   {/* {
      //     this.props.children
      //   } */}
      //   {/* <Header /> */}
      //   <Modal>
      //     <HocTest
      //       handleMinusClick={this.handleMinusClick}
      //       handlePlusClick={this.handlePlusClick}
      //       number={this.state.number}
      //     />
      //   </Modal>
      // </div>
      <PageContainer>
        这是页面的内容
      </PageContainer>
    )
  }
}

export default testComposition