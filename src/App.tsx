import React from 'react';
import './App.css';

import ToDoList from "./projects/todoList/index";

import RickAndMorty from "./projects/RickAndMorty/index";
import {StoreProvider} from "./projects/RickAndMorty/Store"

function App(): JSX.Element {
  return (
    <StoreProvider>
      <div className="container">
        <ToDoList />
      </div>
      <div className="container">
        <RickAndMorty/>
      </div>
    </StoreProvider>
  );
}

export default App;
