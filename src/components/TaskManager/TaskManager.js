import React, { useState, useEffect } from 'react';
import './dist/TaskManager.css';

function guid() {
  return new Date();
}

function toIsoDate(timestamp = Date.now()) {
  return new Date(timestamp).toISOString().split('T')[0];
}

function TaskManager(props) {
  const defaultInput = '';
  const defaultDate = toIsoDate();

  const [input, setInput] = useState(defaultInput);
  const [date, setDate] = useState(defaultDate);
  const [tasks, setTasks] = useState([]);

  let taskInput;

  useEffect(() => {
    taskInput.focus();
  }, [taskInput]);

  // componentDidUpdate(){
  //   localStorage.setItem('todoapp', JSON.stringify(this.state));
  // }

  function addTask() {
    if (input.length === 0) {
      return;
    }
    const newTask = {
      value: input,
      date: date,
      id: guid(),
    };

    setTasks([...tasks, newTask]);
    setInput(defaultInput);
    setDate(defaultDate);
  }

  function removeTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return { ...task, deleted: true };
        }
      })
    );

    setTimeout(() => {
      setTasks(tasks.filter((t) => t.id !== id));
    }, 1000);
  }

  function handleInput(evt) {
    if (evt.nativeEvent.key === 'Enter') {
      addTask();
    } else {
      setInput(evt.target.value);
    }
  }

  function handleDate(evt) {
    if (evt.nativeEvent.key === 'Enter') {
      addTask();
    } else {
      setDate(evt.target.value);
    }
  }

  function renderControls(type) {
    switch (type) {
      case 'daily':
      case 'weekly':
        return (
          <div className="controls">
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyUp={handleInput}
              placeholder="your task here"
              ref={(input) => {
                taskInput = input;
              }}
            />
            <button onClick={addTask}>Add</button>
          </div>
        );
      default:
        return (
          <div className="controls">
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyUp={handleInput}
              placeholder="your task here"
              ref={(input) => {
                taskInput = input;
              }}
            />
            <input
              type="date"
              value={date}
              onChange={handleDate}
              max={toIsoDate(Date.now() + 365 * 24 * 60 * 60 * 1000)}
            />
            <button onClick={addTask}>Add</button>
          </div>
        );
    }
  }

  const Task = ({ value, date, onClick, deleted }) => (
    <div className={`task ${deleted ? 'deleted' : ''}`}>
      <button className="remove" onClick={onClick}>
        ×
      </button>
      <div>
        {new Date(date).toLocaleDateString()} - {value}
      </div>
    </div>
  );

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <Task key={t.id} {...t} onClick={() => removeTask(t.id)} />
      ))}
      {renderControls(props.type)}
    </div>
  );
}

export default TaskManager;
