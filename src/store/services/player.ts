import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/axio";

export const loadCourses = createAsyncThunk(
  "player/load",
  async (state, action) => {
    const res = await api.get("/courses/1");

    return res.data;
  }
);
