import React, { useState, useEffect } from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({ addTodo, editTodo, editTask, setEditTask }) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editTask) {
      setInput(editTask.text);
    } else {
      setInput('');
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    
    if (editTask) {
      editTodo(editTask.id, input);
    } else {
      addTodo(input);
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder={editTask ? 'Update task' : 'Add a new task'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        {editTask ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
