// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import donationReducer from './features/donationSlice';
import searchReducer from './features/searchSlice';
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    donations: donationReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export default store;
