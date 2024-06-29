import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editing, setEditing] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoObject = {
      text: newTodo,
      completed: false
    };
    setTodos([...todos, newTodoObject]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleUpdate = (index, text) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditing(null);
  };

  return (
    <div>
      <h1>Todo List app</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo item"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editing === index ? (
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleUpdate(index, e.target.value)}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;




