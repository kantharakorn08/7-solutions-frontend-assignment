import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./model";
import _ from "lodash";

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
      const { value } = payload;
      _.remove(state.fruits, (item) => {
        return _.get(item, "name") === _.get(value, "name");
      });
    },
    removeVegetable(state, { payload }) {
      const { value } = payload;
      _.remove(state.vegetables, (item) => {
        return _.get(item, "name") === _.get(value, "name");
      });
    },
    setDataLists(state, { payload }) {
      const { value } = payload;
      state.dataLists = value;
    },
    addDataLists(state, { payload }) {
      const { value } = payload;
      const checkExist = _.find(state.dataLists, (item) => {
        return _.get(item, "name") === _.get(value, "name");
      });
      if (_.isEmpty(checkExist)) {
        state.dataLists.push(value);
      }
    },
    setJsonData(state, { payload }) {
      const { value } = payload;
      state.jsonData = value;
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
  setJsonData,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
