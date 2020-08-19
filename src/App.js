import React from 'react';
import Calendar from "./components/Calendar";
import './App.css';
import ToDoApp from './components/ToDoApp.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showToDo: false
    }
    this.toggleToDo = this.toggleToDo.bind(this)
  }
  toggleToDo() {
    this.setState({ showToDo: !this.state.showToDo })
  }
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
          <Calendar toggleToDo={this.toggleToDo}/> 
        </main>
        <div>
          <ToDoApp show={this.state.showToDo}/>
        </div>
      </div>
    );
  }
}

export default App;
