import React from "react";
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './features/Header/Header';
import { LeftMenu } from './features/LeftMenu/LeftMenu';
import { Posts } from "./features/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Header />

      <div className='main'>
        <div className='sidebar'>
          <LeftMenu />
        </div>
        <div className="posts">
          <Posts />
        </div>


      </div>




    </div>
  );
}

export default App;

/*

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>


*/