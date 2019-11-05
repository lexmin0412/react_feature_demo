import React, { Component, Suspense } from 'react'
import Example from './hooks'
import Header from './components/header'

export default class reactFeature extends Component {

  state = {
    renderContent: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        renderContent: true
      })
    }, 2000);
  }
  
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
        <Header />
        {/* {
          this.state.renderContent ?
          <div className="to-render">
            这是即将渲染的内容
          </div>
          :null
        } */}
        {/* <Example /> */}
        React Feature
        </Suspense>
      </div>
    )
  }
}
