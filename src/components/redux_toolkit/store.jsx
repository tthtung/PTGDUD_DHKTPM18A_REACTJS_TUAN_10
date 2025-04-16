import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice";
import counterSliceAd from "./counterSlideAd";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    counterSliceAd: counterSliceAd,
  },
});

export default store;
