import React from 'react';
import './dist/ToDoApp.css'

class ToDoApp extends React.Component{

  constructor(props){
    super(props);
    this.state = JSON.parse(localStorage.getItem('todoapp')) || {
      input: '',
      todos: [{
        value: 'This is a sample TODO!',
        id: this.guid()
      }]
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount(){
    if (this.props.show) {
      this.todoInput.focus();
    }
  }

  componentDidUpdate(){
    localStorage.setItem('todoapp', JSON.stringify(this.state));
  }

  addTodo(){
    if (this.state.input.length===0) {
      return
    }
    const newTodo = {
      value: this.state.input,
      id: this.guid()
    };

    this.setState(state => ({
      todos: [ ...state.todos, newTodo],
      input: ''
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
    return this.props.show ? (
      <div className="todo-list">
        <h1>ToDo</h1>

        { this.state.todos.map(t => <Todo key={t.id} {...t} onClick={()=>this.removeTodo(t.id)}/>)}

        <div className="controls">
          <input type="text" 
            value={this.state.input} 
            onChange={this.handleInput} 
            onKeyDown={this.handleInput}  
            ref={(input) => { this.todoInput = input; }} />
          <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    ) : (<div></div>)
  }  
}

const Todo = ({value, onClick, deleted}) => (
  <div className={`todo ${deleted? 'deleted' : ''}`} >
    <button className="remove" onClick={onClick}>×</button>
    <div>{value}</div>

  </div>
);

export default ToDoApp;