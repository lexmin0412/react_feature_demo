import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HOC from './components/hoc'
import TestComposition from './testComposition'
import ReactFeature from './reactFeature'
import * as serviceWorker from './serviceWorker';
import routeList from './router/routes'
import WebRouter from './router/index'
import Hooks from './hooks'

function toggleRouter(item) {
  // const webRouter = new WebRouter(routeList)
  WebRouter.push(item.path)
  ReactDOM.render(item.component, document.getElementById('root'));
}

console.log(window.location.pathname)

window.addEventListener('historychange', function () {
  console.log('historychange')

  let _ROUTE = routeList.find(item => item.path === window.location.pathname)
  _ROUTE = _ROUTE ? _ROUTE : routeList.find(item => item.path === '*')
  const _COMPONENT = _ROUTE.component

  console.log('_COMPONENT', _COMPONENT)

  ReactDOM.render(
    <div>{
      routeList.map((item, index) => {
        return (
          <div key={index} onClick={() => toggleRouter(item)}>{item.name}</div>
        )
      })
    }
      {/* {_COMPONENT} */}
    </div>, document.getElementById('root'));
})

let _ROUTE = routeList.find(item => item.path === window.location.pathname)
_ROUTE = _ROUTE ? _ROUTE : routeList.find(item => item.path === '*')
const _COMPONENT = _ROUTE.component

console.log('_COMPONENT', _COMPONENT)

ReactDOM.render(<div>{
  routeList.map((item, index) => {
    return (
      <div key={index} onClick={() => toggleRouter(item)}>{item.name}</div>
    )
  })
}
{/* // {_COMPONENT} */}
</div>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
