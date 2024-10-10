import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, completeTodo, deleteTodo, setEditTask }) => {
  return (
    <li className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => setEditTask(todo)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
