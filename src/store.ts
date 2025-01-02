import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./core/apis/api";
import viewModeReducer from "./shared/slices/viewSlice";

const store = configureStore({
  reducer: {
    viewMode: viewModeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
