const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export default function reducer(state, action) {
  const data = action.value;
  switch (action.type) {
    case SET_CURRENT_USER:
        return {
            ...state,
            currentUser: data
        };
    case SET_USERS:
        return {
            ...state,
            allUsers: [...data]
        };
    case ADD_USER:
        const allUsers = [...state.allUsers, data];
        return {
            ...state,
            allUsers
        };
    case DELETE_USER:
        const modifiedUsers = [...state.allUsers].filter(userData => userData.email !== data.email);
      return {
        ...state,
        allUsers: modifiedUsers
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}