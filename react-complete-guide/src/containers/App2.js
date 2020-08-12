import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Lily', age: 25 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  });
  const [otherState, setOtherState] = useState('some other value');
  switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Lily', age: 25 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };
  return (
    <div className="App">
      <h1> Hi I am a react app </h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age="28" />
      <Person name="Manu" age="29"> My hobby is racing</Person>
      <Person name="Stephanie" age="26" />
    </div>
  );
}
export default app;
