import React from 'react';
import './App.css';

import ToDoList from "./projects/todoList/index";
import RickAndMorty from "./projects/RickAndMorty/index";

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <ToDoList />
      </div>
      <div className="container">
        <RickAndMorty/>
      </div>
    </>
  );
}

export default App;
