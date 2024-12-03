// src/reducers/authReducer.js
const initialState = {
    token: null,
    user: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH_TOKEN':
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user || null,
        };
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          user: null,
        };
      default:
        return state;
    }
  };
  