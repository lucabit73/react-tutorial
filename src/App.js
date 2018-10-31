import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // el1 is created using jsx syntax and is equivalent to el2, both of them are object
    const el1 = <div className='App'><h1>My elem</h1></div>;
    const el2 = React.createElement('div', {className: 'App'}, React.createElement('h1', null, "My elem"))
    console.log(el1);
    console.log(el2);
    console.log('typeof el1: ' + typeof el1);

    return (
      // can do this because of jsx syntax
      <div className='App'><h1>Bau!</h1></div>
      // we can return also 'el1' or 'el2'
    );
  }
}

export default App;
