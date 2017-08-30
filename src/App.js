import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/MainContent/Content';
import Counter from './components/MainContent/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Content/>
        <Counter/>
      </div>
    );
  }
}

export default App;
