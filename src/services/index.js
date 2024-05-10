import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDummyJsonUsers = createAsyncThunk(
  "dummyJson/users",
  async (bodyProps, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      return response;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);
