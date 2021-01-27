import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

  }

  handleClick(){
    return {buttonText: "Thank you for pressing me"};
  }

  render(){
    return <button onClick={this.handleClick}>buttonText</button>
  }

}

export default App;
