import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>

      </div>
    );
  }
}

export default App;
