const initialState = {
    users: []
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'UPDATE_USER':
        const updatedUsers = state.users.map((user, index) =>
          index === action.payload.index ? action.payload.user : user
        );
        return {
          ...state,
          users: updatedUsers
        };
      case 'DELETE_USER':
        return {
          ...state,
          users: state.users.filter((_, index) => index !== action.payload)
        };
      default:
        return state;
    }
  };
  