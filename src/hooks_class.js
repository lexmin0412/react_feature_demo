import React, { Component } from 'react'

export default class hooks_class extends Component {

  state = {
    count: 0
  }

  componentDidMount() {
    const { count } = this.state
    document.title = `you've clicked the button ${count} times`
  }

  componentDidUpdate() {
    const { count } = this.state
    document.title = `you've clicked the button ${count} times`
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <div>
          <div>
            you've clicked the button {count} times
          </div>
          <button onClick={()=>this.setState({count: count+1})}>
            add
          </button>
        </div>
      </div>
    )
  }
}
