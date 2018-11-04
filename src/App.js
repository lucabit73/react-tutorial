import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { throws } from 'assert';

class App extends Component {
  state = {
    person: [
      {id: "sdfg", name: "max", age: 28},
      {id: "ew3rf", name: "Ale", age: 18},
      {id: "asd2", name: "Paole", age: 38},
    ],
    showpersons: false
  }

  namechangedHandler = (event) => {
    this.setState({
      person: [
        {name: "max", age: 28},
        {name: event.target.value, age: 18},
        {name: "Paole", age: 38},
    ]});
  }

  togglepersonsHandler = () => {
    this.setState({showpersons: !this.state.showpersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.person.map((i) => {
            return <Person 
              name={i.name} 
              age={i.age}
              key={i.id}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Bau</h1>
        <button 
          style={style}
          onClick={this.togglepersonsHandler}>Click me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
