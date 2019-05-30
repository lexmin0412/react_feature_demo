import React, { Component } from 'react'

// 赋予组件打印日志的能力
const withLog = Comp => {
	console.log(Comp.name+'渲染了')
	return props => (
		<Comp {...props} />
	)
}

// 赋予组件名称
const withName = (Comp) => {
	class NewComponent extends Component {

		constructor(props) {
			super(props)
		}
		
		componentDidMount() {
			// 这里获取名称，可以进行ajax操作
			this.name = '高阶组件初探'
		}
		
		render() {
			return (
				<Comp {...this.props} name={this.name} />
			)
		}
	}

	// 这里就是返回包装后的组件 而不是原组件了，因为重写了组件的生命周期
	return NewComponent
	
}

// 使用装饰器赋予组件能力
@withLog
@withName
class hoc extends Component {
	render() {
		return (
			<div>
				这是一个组件
			</div>
		)
	}
}

export default withLog(withName(hoc))
// export default hoc


// Support for the experimental syntax 'decorators-legacy' isn't currently enabled (37:1):
