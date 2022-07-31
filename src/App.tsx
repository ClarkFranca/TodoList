import React from 'react';
import './App.css';
import { Home } from './page/home';
import TodoItem from './page/TodoItem';


function App() {
  return (
    <div className="App">      
      <Home />
      <TodoItem />
    </div>
  );
}

export default App;
