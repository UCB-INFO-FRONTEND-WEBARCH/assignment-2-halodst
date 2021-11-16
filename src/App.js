import './App.css';
import React, { useEffect, useState } from "react";
//importing components
import Form from "./components/Form";
import TodoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [todos, setTodos] = useState([]);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    saveLocalTodos();
  }, [todos, status])


  //Save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Can Ge to-do list</h1>
      </header>
      <Form inputTag={inputTag} setInputTag={setInputTag} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} tags={tags} setTags={setTags} />
      <TodoList inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} tags={tags} setTags={setTags} />
    </div>
  );
}

export default App;
