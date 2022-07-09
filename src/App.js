import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


/*
useEffect(() => {
//effect
return () => {
  //clean up
  }
},[dependencyArray]); the dependencyArray is used to determine
if the effect gets fired off or not.
if one or more variables in the dependencyArray changes,
the effect will be fired.
if the dependencyArray is empty, then the effect will fire when the component
is initially rendered

*/

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if (storageTodos){
       setTodos(storageTodos);
     }
  },[]);
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    //why stringify?
  },[todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function  removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className = "App">

        <Typography style = {{ padding: 16 }} variant = "h1">
        <p> React Todo</p></Typography>
        <TodoForm addTodo = {addTodo} />
        <TodoList
          todos = {todos}
          toggleComplete = {toggleComplete}
          removeTodo = {removeTodo}
        />

    </div>
  );
}

export default App;
