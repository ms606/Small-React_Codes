import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = { heading: 'This is a button',
                   casde: 'Hello' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState (() => {
      return (
      {heading: "You pressed me.",
       casde: "Heading"}
    )}
    )
}

  render(){
    const { heading } = this.state;
    const { casde } = this.state;

    console.log(heading,casde);    

    return(
      <div>
       <button onClick={this.handleClick}>{heading}</button>
       <button onMouseEnter={this.handleClick}>{casde}</button>
      </div>
    )

  }

}

export default App;