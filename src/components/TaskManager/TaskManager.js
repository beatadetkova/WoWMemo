import React from 'react';
import './dist/TaskManager.css'

const defaultInput = ''
const defaultDate = toIsoDate()

class TaskManager extends React.Component{

  constructor(props){
    super(props);
    this.state = JSON.parse(localStorage.getItem('taskapp')) || {
      input: defaultInput,
      date: defaultDate,
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount(){
    if (this.props.show) {
      this.taskInput.focus();
    }
  }

  // componentDidUpdate(){
  //   localStorage.setItem('todoapp', JSON.stringify(this.state));
  // }

  addTask(){
    if (this.state.input.length===0) {
      return
    }
    const newTask = {
      value: this.state.input,
      date: this.state.date,
      id: this.guid()
    };

    this.setState(state => ({
      tasks: [ ...state.tasks, newTask],
      input: defaultInput,
      date: defaultDate
    }));
  }

  handleInput(evt){
    if(evt.nativeEvent.key === "Enter"){
      this.addTask();
    }else{
      this.setState({
        input: evt.target.value
      });
    }
  }

  handleDate(evt) {
    if(evt.nativeEvent.key === "Enter"){
      this.addTask();
    }else{
      this.setState({
        date: evt.target.value
      });
    }
  }

  removeTask(id){

    this.setState(state => {
      return{
        tasks: state.tasks.map(task => {
          if(task.id !== id){
            return task;
          } else {
            return { ...task, deleted: true }
          }
        })
      };
    });

    setTimeout(() => {
      this.setState(state => {
        return{
          tasks: state.tasks.filter(t => t.id !== id)
        }});
    }, 1000);
  }

  guid(){
    return new Date();
  }

  render(){
    return (
      <div className="task-list">

        { this.state.tasks.map(t => <Task key={t.id} {...t} onClick={()=>this.removeTask(t.id)}/>)}

        <div className="controls">
          <input type="text" 
            value={this.state.input} 
            onChange={this.handleInput} 
            onKeyUp={this.handleInput}  
            ref={(input) => { this.taskInput = input; }} />
          <input type="date" 
            value={this.state.date} 
            onChange={this.handleDate}
            max={toIsoDate(Date.now() + 365*24*60*60*1000)}
            />
          <button onClick={this.addTask}>Add</button>
        </div>
      </div>
    )
  }  
}

function toIsoDate(timestamp = Date.now()) {
  return new Date(timestamp).toISOString().split('T')[0]
}

const Task = ({value, date, onClick, deleted}) => (
  <div className={`task ${deleted? 'deleted' : ''}`} >
    <button className="remove" onClick={onClick}>×</button>
    <div>{new Date(date).toLocaleDateString()} - {value}</div>
  </div>
);

export default TaskManager;