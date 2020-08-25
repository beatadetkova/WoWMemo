import React from "react";
import ToDoApp from "../ToDo/ToDoApp.js"

function Home(props) {
  return   <div className="App">
      <header className="App-header">
      WoWMemo
      </header>
      <main>
        <ToDoApp />
      </main>
    </div>
}

export default Home;