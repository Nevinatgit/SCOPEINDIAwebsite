
import React, { createContext, useReducer, useContext } from 'react';
const AppContext = createContext();


const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token };
    case 'SET_Login':
      return { ...state, login: action.login };
    case 'GET_TOKEN':
      return state.token;
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, { token: '' ,login: false});

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
