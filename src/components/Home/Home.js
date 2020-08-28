import React from "react";
import TaskManager from "../TaskManager/TaskManager.js"

function Home(props) {
  return   <div className="App">
      <header className="App-header">
      WoWMemo
      </header>
      <main>
        <TaskManager />
      </main>
    </div>
}

export default Home;