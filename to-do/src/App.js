// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   // Add new task
//   const addTodo = (e) => {
//     e.preventDefault();
//     if (task.trim() === '') return;
//     setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
//     setTask('');
//   };

//   // Toggle task completion
//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Remove task
//   const removeTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <form onSubmit={addTodo}>
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button type="submit">Add Todo</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
//             {todo.text}
//             <button onClick={() => toggleComplete(todo.id)}>
//               {todo.completed ? 'Undo' : 'Complete'}
//             </button>
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import TodoApp from './pages/ TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
