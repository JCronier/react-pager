import React, { useReducer, createContext } from "react";

// Reducer
import reducer from "../reducers/reducer";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    allUsers: []
  });

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
}