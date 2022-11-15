import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
    loading: false,
    data: {},
  },
  reducers: {
    incrementNumber: (state) => {
      state.number += 1;
    },
    fetchDataLoading: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action:PayloadAction<any>) => {
      state.data = action.payload;
    },
    fetchDataFailed: (state, action:PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const {
  incrementNumber,
  fetchDataFailed,
  fetchDataLoading,
  fetchDataSuccess,
} = counterSlice.actions;

export default counterSlice.reducer;
