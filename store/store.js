import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "@/reducer/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});
