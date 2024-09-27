import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  return response.data.meals;
});

export const fetchMealDetail = createAsyncThunk(
  "meals/fetchMealDetail",
  async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  }
);

export const searchMeals = createAsyncThunk(
  "meals/searchMeals",
  async (query) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    return response.data.meals;
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
    selectedMeal: null,
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.meals = action.payload;
      })
      .addCase(fetchMealDetail.fulfilled, (state, action) => {
        state.selectedMeal = action.payload;
      })
      .addCase(searchMeals.fulfilled, (state, action) => {
        state.meals = action.payload;
      });
  },
});

export default mealsSlice.reducer;
