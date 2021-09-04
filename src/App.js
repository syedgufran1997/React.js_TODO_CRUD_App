import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("");

  const [todo, setTodo] = useState([]);

  const addTodo = (todoValue) => {
    const newTodos = [...todo, { todoValue }];
    setTodo(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  // delete todo using filter method
  // const deleteTodo = (todo) => {
  //   const newTodos = todos.filter((item) => item.todo !== todo);
  //   setTodos(newTodos);
  // };

  const completeTodo = (index) => {
    const newTodos = [...todo];
    newTodos[index].isCompleted = true;
    setTodo(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo To List"
      />
      <button onClick={handleSubmit}>Add Todo</button>

      <div>
        {todo.map((item, index) => (
          <div
            className="todoWrap"
            style={{
              backgroundColor: item.isCompleted ? "tomato" : "lightgrey",
              paddingLeft: "20px",
              margin: "10px auto",
              borderRadius: "10px",
            }}
          >
            <h4
              style={{
                color: item.isCompleted ? "White" : "grey",
              }}
            >
              {index}
            </h4>
            <p
              key={index}
              style={{
                textDecoration: item.isCompleted ? "line-through" : "",
                color: item.isCompleted ? "White" : "grey",
              }}
            >
              {item.todoValue}{" "}
            </p>
            <div className="todoButtonWrap">
              <button onClick={() => completeTodo(index)}>&#x2714;</button>
              <button onClick={() => deleteTodo(index)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
