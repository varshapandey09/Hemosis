// src/store.js
import { createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/authReducer'; // Authentication reducer

const rootReducer = combineReducers({
  auth: authReducer, // Combine all your reducers here
});

const store = createStore(rootReducer);

export default store;
