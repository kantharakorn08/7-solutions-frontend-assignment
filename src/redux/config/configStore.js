import { configureStore } from "@reduxjs/toolkit";
import toDoListSlice from "../slices/toDoList";

export default configureStore({
  reducer: {
    toDoList: toDoListSlice,
  },
});
