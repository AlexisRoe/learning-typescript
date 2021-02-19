import React from 'react';
import './App.css';

import ToDoList from "./projects/todoList/index"

function App():JSX.Element {
  return (
    <>
      <h1>Projects</h1>
      <ToDoList />
    </>
  );
}

export default App;
