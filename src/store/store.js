import { configureStore } from "@reduxjs/toolkit";
import { prodectApi } from "./services/prodectApi";

const store = configureStore({
  reducer: {
    [prodectApi.reducerPath]: prodectApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(prodectApi.middleware),
});

export default store;
