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
    incrementByAmount: (state, actions) => {
        state.value += actions.payload
    },
    decrementByAmount: (state, actions) =>{
        state.value -= actions.payload
    },
    reset: (state) =>{
        state.value = 0
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, reset } = counterSlice.actions; //connecting with actions
export const selectCount = (state) => state.counter.value; // showing the value
export default counterSlice.reducer; // for store
