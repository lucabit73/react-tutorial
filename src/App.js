import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { throws } from 'assert';

class App extends Component {
  state = {
    person: [
      {name: "max", age: 28},
      {name: "Ale", age: 18},
      {name: "Paole", age: 38},
    ],
    showpersons: false
  }

  switchnameHandler = (newname) =>{
    this.setState({
      person: [
        {name: newname, age: 28},
        {name: "Ale", age: 18},
        {name: "Paole", age: 138},
      ]});
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
              age={i.age}/>
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
