import React from 'react';
import './App.css';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <p>Two components Parent and Child have their states whit the number "count"</p>
      <p>Parent component's "count" value is passed to the child via prop named "parentCount"</p>
      <p>Life cycle method in Example Child shouldComponentUpdate() checks "count" numbers</p>
      <p>If the number "count" in the parent and in the child is the same, then child component will not update its' state.</p>
      <p>Throught the input is possible to update parent component state "count"</p>
      <Example/>
    </div>
  );
}

export default App;
