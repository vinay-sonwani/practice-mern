import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, completeTodo, deleteTodo, setEditTask }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          setEditTask={setEditTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
