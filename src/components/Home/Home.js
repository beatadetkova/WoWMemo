import React from 'react';
import TaskManager from "../TaskManager/TaskManager.js"
import './dist/Home.css'

function Home(props) {

  return <div className="App">
      <header className="App-header">
      WoWMemo
      </header>
      <main>
        <div className="selected-date">
          <TaskManager />
        </div>
        <label className="recurring">Recurring:</label>
        <div className="recurring">
          <div className="daily">
            <div>
              <label>Daily:</label> 
              <TaskManager type="daily"/>
            </div>
          </div>
          <div className="weekly">
            <div>
              <label>Weekly:</label>
              <TaskManager type="weekly"/>
            </div>
          </div>
        </div>
      </main>
    </div>
}

export default Home;