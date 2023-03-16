import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import featuredSlice from "./slices/featuredSlice";
import historySlice from "./slices/historySlice";
import partnersSlice from "./slices/partnersSlice";
import pricesSlice from "./slices/pricesSlice";
import pulseSlice from "./slices/pulseSlice";
import uniquesSlice from "./slices/uniquesSlice";
import userSlice from "./slices/userSlice";
import menuSlice from "./slices/menuSlice";
import homeSlice from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    featured: featuredSlice,
    partners: partnersSlice,
    categories: categoriesSlice,
    prices: pricesSlice,
    uniques: uniquesSlice,
    pulses: pulseSlice,
    user: userSlice,
    history: historySlice,
    menu: menuSlice,

    home : homeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
