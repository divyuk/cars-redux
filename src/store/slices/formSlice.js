import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  // the form will have two things
  // name and cost
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer; // Exporting the one combined Reducer
