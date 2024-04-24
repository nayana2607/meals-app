import { configureStore } from "@reduxjs/toolkit";
import favoriteRedcuer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteRedcuer,
  },
});
