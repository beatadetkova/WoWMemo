import React from 'react';
// import Calendar from "./components/Calendar";
import './App.css';
import ToDoApp from './components/ToDoApp.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // showToDo: false
    }
    // this.toggleToDo = this.toggleToDo.bind(this)
  }
  // toggleToDo() {
  //   this.setState({ showToDo: !this.state.showToDo })
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          WoWMemo
        </header>
        <main>
          <ToDoApp />
          {/* <Calendar toggleToDo={this.toggleToDo}/>  */}
        </main>
      </div>
    );
  }
}

export default App;
