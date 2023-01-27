import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 4,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
        state.value -= 1;
      },
  },
});

export const { increment, decrement } = counterSlice.actions; //connecting with actions
export const selectCount = (state) => state.counter.value; // showing the value
export default counterSlice.reducer; // for store