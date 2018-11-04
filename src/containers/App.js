import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
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
    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <Persons 
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.namechangedHandler}/>
      );      
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit 
            appTitle = {this.props.title}
            person = {this.state.person}
            showpersons = {this.state.showpersons}
            clicked = {this.togglepersonsHandler}
          />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
