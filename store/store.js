import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "@/reducer/UserSlice";
import { CartReducer } from "@/reducer/CartSlice";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    cart:CartReducer
  },
});
