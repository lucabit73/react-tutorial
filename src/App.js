import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bau</h1>
        <Person name="Max" age="11"/>
        <Person name="Ale" age="3"><p>And I'm bad</p></Person>
        <Person name="Luk" age="111"/>
      </div>
    );
  }
}

export default App;
