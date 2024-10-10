import React from 'react';
import React, { useState, useEffect } from 'react';


// First tyep 

const users = [
  { id: 1, name: 'John Doe', profilePic: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Sam Johnson', profilePic: 'https://via.placeholder.com/150' },
];

// Second type 
const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 }
  ];
  
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUsers(data));
      }, []); 
    
  return (
    <div>
        {/* First type  */}
      <h1>User Profiles</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.profilePic} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
      {/* Second type  */}
      <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Age: {item.age}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default UserList;
