import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bau</h1>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
