import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import counterSliceAd from "./counterSlideAd";
import bmiReducer from "./bmiSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    counterSliceAd: counterSliceAd,
    bmi: bmiReducer,
  },
});

export default store;
