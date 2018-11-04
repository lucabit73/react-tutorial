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
    showdiv: false
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

  toggledivHandler = () => {
    this.setState({showdiv: !this.state.showdiv});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Bau</h1>
        <div>
          <button onClick={this.toggledivHandler}>Toggle Some Div</button>
          {this.state.showdiv ?
            <div><p>Hi there!</p></div>
            : null
          }
        </div>
        <button 
          style={style}
          onClick={() => this.switchnameHandler('Maxim')}>Click me!</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age}/>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchnameHandler.bind(this, 'Maaax')}
          changed={this.namechangedHandler}>And I'm bad</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
