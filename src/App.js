import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      React.createElement('div', {className: 'App'}, React.createElement('h1', null, "I'm a Baz"))
    );
  }
}

export default App;
