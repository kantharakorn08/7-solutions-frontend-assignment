import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addFruit(state, { payload }) {
      const { value } = payload;
      state.fruits.push(value);
    },
    addVegetable(state, { payload }) {
      const { value } = payload;
      state.vegetables.push(value);
    },
    removeFruit(state, { payload }) {
      const { value, dataToReturn } = payload;
      state.dataLists.push(dataToReturn);
      state.fruits = value;
    },
    removeVegetable(state, { payload }) {
      const { value, dataToReturn } = payload;
      state.dataLists.push(dataToReturn);
      state.vegetables = value;
    },
    setDataLists(state, { payload }) {
      const { value } = payload;
      state.dataLists = value;
    },
    addDataLists(state, { payload }) {
      const { value } = payload;
      state.dataLists.push(value);
    },
  },
});

export const {
  addFruit,
  addVegetable,
  removeFruit,
  removeVegetable,
  setDataLists,
  addDataLists,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
