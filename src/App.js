import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import WebRouter from './router/index'
import routeList from './router/routes'

function App() {

  const webRouter = new WebRouter(routeList)

  // function toggleRouter(item) {
  //   webRouter.push(item.path)
  //   ReactDOM.render(, document.getElementById('root'));
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
