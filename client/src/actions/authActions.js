// src/actions/authActions.js
export const setAuthToken = (token, user) => {
    return {
      type: 'SET_AUTH_TOKEN',
      payload: { token, user },
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  