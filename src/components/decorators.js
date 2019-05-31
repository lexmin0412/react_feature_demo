import React, { Component } from 'react'

//通过多重高阶组件确定key并设定组件
export const withStorage = (key) => (WrappedComponent) => {
  return class extends Component {
    componentWillMount() {
        let data = localStorage.getItem(key);
        this.setState({data});
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

@withStorage('data')
class MyComponent2 extends Component {  
    render() {
        return <div>{this.props.data}111</div>
    }
}

@withStorage('name')
class MyComponent3 extends Component {  
    render() {
        return <div>{this.props.data}</div>
    }
}

export {
  MyComponent2, 
  MyComponent3
}