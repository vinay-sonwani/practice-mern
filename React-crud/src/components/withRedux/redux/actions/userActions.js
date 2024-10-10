export const addUser = (user) => ({
    type: 'ADD_USER',
    payload: user
  });
  
  export const updateUser = (index, user) => ({
    type: 'UPDATE_USER',
    payload: { index, user }
  });
  
  export const deleteUser = (index) => ({
    type: 'DELETE_USER',
    payload: index
  });
  