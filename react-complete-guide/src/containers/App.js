import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '1jef23', name: 'Max', age: 28 },
      { id: '2flae1', name: 'Manu', age: 29 },
      { id: '3dsfej', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: true,
  }
  switchNameHandler = (newName) => {
    this.setState(
      {
        persons: [
          { name: newName, age: 25 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 },
        ]
      }
    )
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <Cockpit 
        title = {this.props.title}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}
export default App;
