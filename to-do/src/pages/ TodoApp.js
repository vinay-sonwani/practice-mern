import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import '../styles/TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);

  // Add new todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Edit existing todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditTask(null);
  };

  // Toggle completion
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm
        addTodo={addTodo}
        editTodo={editTodo}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        setEditTask={setEditTask}
      />
    </div>
  );
};

export default TodoApp;
