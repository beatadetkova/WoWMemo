import React, { useState } from 'react';
import TaskManager from "../TaskManager/TaskManager.js"
import TaskManagerToggler from "../TaskManagerToggler/TaskManagerToggler.js"

function Home(props) {

  const [taskManagerActive, setTaskManagerActive] = useState(false);

  const toggleTaskManager = () => {
    setTaskManagerActive(!taskManagerActive);
  }

  return <div className="App">
      <header className="App-header">
      WoWMemo
      </header>
      <main>
        {taskManagerActive && <TaskManager />}
      </main>
      <div>
        <TaskManagerToggler toggle={ toggleTaskManager }/>
      </div>
    </div>
}

export default Home;