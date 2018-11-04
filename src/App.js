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

  namechangedHandler = (event, id) => {
    const persons = [...this.state.person]
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    })
    persons[personIndex].name = event.target.value;
    this.setState({person: persons});
  }

  togglepersonsHandler = () => {
    this.setState({showpersons: !this.state.showpersons});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.person];
    persons.splice(index, 1);
    this.setState({person: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.person.map((item, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.namechangedHandler(event, item.id)}
              name={item.name} 
              age={item.age}
              key={item.id}/>
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.person.length <= 2) classes.push('red');
    if (this.state.person.length <= 1) classes.push('bold');

    return (
      <div className="App">
        <h1>Bau</h1>
        <p className={classes.join(" ")}>Dinamically change color</p>
        <button 
          style={style}
          onClick={this.togglepersonsHandler}>Click me!</button>
        {persons}
      </div>
    );
  }
}

export default App;
