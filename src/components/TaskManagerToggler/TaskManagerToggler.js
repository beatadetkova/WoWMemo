import React from 'react';
import CalendarPlusButton from './CalendarPlusButton.png';
import './dist/TaskManagerToggler.css'

function TaskManagerToggler(props) {
  return  (
    <div className= 'task-button' type="button" onClick={props.toggle}>
      <img alt='button for adding tasks' src={CalendarPlusButton}/>
    </div>
  ) 
}

export default TaskManagerToggler;