import React from 'react';
import CalendarPlusButton from './CalendarPlusButton.png'

function TaskManagerToggler(props) {
  return  (
    <div className= 'tc grow pointer add-button' type="button" onClick={props.toggle}>
      <img alt='button for adding tasks' src={CalendarPlusButton}/>
    </div>
  ) 
}

export default TaskManagerToggler;