import React from 'react';
import './dist/ToDoApp.css'

const defaultInput = ''
const defaultDate = toIsoDate()

class ToDoApp extends React.Component{

  constructor(props){
    super(props);
    this.state = JSON.parse(localStorage.getItem('todoapp')) || {
      input: defaultInput,
      date: defaultDate,
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount(){
    if (this.props.show) {
      this.todoInput.focus();
    }
  }

  // componentDidUpdate(){
  //   localStorage.setItem('todoapp', JSON.stringify(this.state));
  // }

  addTodo(){
    if (this.state.input.length===0) {
      return
    }
    const newTodo = {
      value: this.state.input,
      date: this.state.date,
      id: this.guid()
    };

    this.setState(state => ({
      todos: [ ...state.todos, newTodo],
      input: defaultInput,
      date: defaultDate
    }));
  }

  handleInput(evt){
    if(evt.nativeEvent.key === "Enter"){
      this.addTodo();
    }else{
      this.setState({
        input: evt.target.value
      });
    }
  }

  handleDate(evt) {
    if(evt.nativeEvent.key === "Enter"){
      this.addTodo();
    }else{
      this.setState({
        date: evt.target.value
      });
    }
  }

  removeTodo(id){

    this.setState(state => {
      return{
        todos: state.todos.map(todo => {
          if(todo.id !== id){
            return todo;
          } else {
            return { ...todo, deleted: true }
          }
        })
      };
    });

    setTimeout(() => {
      this.setState(state => {
        return{
          todos: state.todos.filter(t => t.id !== id)
        }});
    }, 1000);
  }

  guid(){
    return new Date();
  }

  render(){
    return (
      <div className="todo-list">

        { this.state.todos.map(t => <Todo key={t.id} {...t} onClick={()=>this.removeTodo(t.id)}/>)}

        <div className="controls">
          <input type="text" 
            value={this.state.input} 
            onChange={this.handleInput} 
            onKeyUp={this.handleInput}  
            ref={(input) => { this.todoInput = input; }} />
          <input type="date" 
            value={this.state.date} 
            onChange={this.handleDate}
            max={toIsoDate(Date.now() + 365*24*60*60*1000)}
            />
          <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }  
}

function toIsoDate(timestamp = Date.now()) {
  return new Date(timestamp).toISOString().split('T')[0]
}

const Todo = ({value, date, onClick, deleted}) => (
  <div className={`todo ${deleted? 'deleted' : ''}`} >
    <button className="remove" onClick={onClick}>×</button>
    <div>{new Date(date).toLocaleDateString()} - {value}</div>
  </div>
);

export default ToDoApp;

//ToDo