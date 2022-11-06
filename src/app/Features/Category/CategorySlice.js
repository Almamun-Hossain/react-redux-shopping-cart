import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "../../Utils/axiosErrorHandler";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetAllCategories",
  async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return data;
    } catch (error) {
      return axiosErrorHandler(error);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: { isLoading: false, categories: [], error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.categories = [];
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
