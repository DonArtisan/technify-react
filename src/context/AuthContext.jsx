// export default function AuthContext() {

import { createContext, useContext, useReducer } from 'react';
import { AUTH_TOKEN } from '../constants';

const InitialState = {
  user: null,
};

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    case 'SIGNIN':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, InitialState);

  const login = (userData) => {
    localStorage.setItem(AUTH_TOKEN, userData.userToken);
    dispatch({
      type: 'LOGIN',
      payload: userData,
    });
  };

  const signin = (userData) => {
    localStorage.setItem(AUTH_TOKEN, userData.userToken);
    dispatch({
      type: 'SIGNIN',
      payload: userData,
    });
  };

  function logout() {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout, signin }}
      {...props}
    />
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth, AuthProvider };
