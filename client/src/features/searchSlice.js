// src/features/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for search functionality
const initialState = {
  query: '', // Stores the text input for search (e.g., location or keyword)
  bloodGroup: '', // Stores the selected blood group
};

// Create the searchSlice
const searchSlice = createSlice({
  name: 'search', // Slice name
  initialState, // Initial state for search
  reducers: {
    // Action to set the search query (e.g., user input for location or keyword)
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    // Action to set the selected blood group from the dropdown
    setBloodGroup: (state, action) => {
      state.bloodGroup = action.payload;
    },
    // Action to trigger searching blood banks based on query and blood group
    searchBloodBanks: (state, action) => {
      // You can handle API call logic here. For now, just logging for testing.
      console.log('Searching blood banks with:', action.payload);
      // Logic for filtering blood banks based on the query and blood group could be implemented here.
    },
  },
});

// Export the actions to be used in components
export const { setSearchQuery, setBloodGroup, searchBloodBanks } = searchSlice.actions;

// Export the reducer to be added to the Redux store
export default searchSlice.reducer;
