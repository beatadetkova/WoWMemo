import React from 'react';
import logo from './logo.svg';
import Calendar from "./components/Calendar";
import ToDoApp from "./components/ToDoApp";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="logo">
            <span>
              <b>WoWMemo</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar /> 
        </main>
        <div>
          <ToDoApp />
        </div>
      </div>
    );
  }
}

export default App;
