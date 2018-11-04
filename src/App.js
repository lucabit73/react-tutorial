import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: "max", age: 28},
      {name: "Ale", age: 18},
      {name: "Paole", age: 38},
    ]
  }
  switchnameHandler = (newname) =>{
    this.setState({
      person: [
        {name: newname, age: 28},
        {name: "Ale", age: 18},
        {name: "Paole", age: 138},
    ]});
  }
  render() {
    return (
      <div className="App">
        <h1>Bau</h1>
        <button onClick={() => this.switchnameHandler('Maxim')}>Click me!</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchnameHandler.bind(this, 'Maaax')}>And I'm bad</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
