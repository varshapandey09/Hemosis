import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  donations: [],
  loading: false,
  error: null,
};

// Async thunk for submitting a donation
export const submitDonation = createAsyncThunk(
  'donations/submitDonation',
  async (donationData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/donations', donationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitDonation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitDonation.fulfilled, (state, action) => {
        state.loading = false;
        state.donations.push(action.payload);
      })
      .addCase(submitDonation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default donationSlice.reducer;
