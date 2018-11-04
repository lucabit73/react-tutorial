import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium , {StyleRoot} from 'radium';

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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.person}
            clicked={this.deletePersonHandler}
            changed={this.namechangedHandler}/>
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.person.length <= 2) classes.push('red');
    if (this.state.person.length <= 1) classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
          <h1>Bau</h1>
          <p className={classes.join(" ")}>Dinamically change color</p>
          <button 
            style={style}
            onClick={this.togglepersonsHandler}>Click me!</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
