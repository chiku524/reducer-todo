import React, { useState, useReducer } from 'react';
import { initialList, reducer } from './reducers/index'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initialList);
  const [taskInput, setTaskInput] = useState('')

  const inputChange = event => {
    event.preventDefault();
    setTaskInput(event.target.value)
  }

  const taskSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: taskInput})
  }

  const toggleItem = item => {
    dispatch({ type: "TOGGLE_IT", payload: item })
  }

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({ type: "CLEAR_ALL" })
  }


  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
        <TodoForm taskSubmit={taskSubmit} clearCompleted={clearCompleted} inputChange={inputChange} state={state} taskInput={taskInput} />
      </div>
      <TodoList state={state} toggleItem={toggleItem} />
    </div>
  )

}

export default App; 