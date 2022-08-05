import { configureStore } from "@reduxjs/toolkit";
import bannersReducer from "./slices/bannerSlice";

const store = configureStore({
  reducer: {
    banners: bannersReducer,
  },
});

export default store;
