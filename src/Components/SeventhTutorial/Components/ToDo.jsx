import React, { useState, useEffect } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onClickHandler = () => {
    const newTodo = document.querySelector("input").value;
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      document.querySelector("input").value = "";
      // ok so here is another method, here we can create a
      // new state for input, and use it here ,and then
      // set the setTodos to setTodo(""). this will empty the input field.
    }
  };

  const onClearHandler = () => {
    setTodos(todos.slice(0, -1));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" />
      <button onClick={onClickHandler}>Add todo</button>
      <button onClick={onClearHandler}>Clear latest todo</button>
    </div>
  );
};

export default ToDo;
