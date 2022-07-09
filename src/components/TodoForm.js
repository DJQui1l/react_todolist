import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function TodoForm({ addTodo }) {
  /*
  const [state, setState = useState([])]
  state - state itself; setState - updates the state

  useState([]) is a Hook.  They let you use state and other React
  features without writing a class.
  Note: Hooks are not a substitution for
  the knowledge of React core principles. Instead, Hooks
  offers a more direct API for the React concepts you already know:
  props, state, meaning, refs, and life cycle.
  */
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value});
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()){
      addTodo({...todo, id:  uuidv4()});
      // reset task input
      setTodo({...todo, task:''});
    }
  }
  return (
    // onSubmit is an event handler

    <form className = "todo-form" onSubmit = {handleSubmit}>
      <TextField
        label = "Task"
        name = 'task'
        type = 'text'
        value = {todo.task}
        onChange = {handleTaskInputChange}
      />
      <Button type='submit'>submit </Button>
    </form>
  );
}

export default TodoForm;
