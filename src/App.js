import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
export class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <News />
      </div>
    )
  }
}

export default App

