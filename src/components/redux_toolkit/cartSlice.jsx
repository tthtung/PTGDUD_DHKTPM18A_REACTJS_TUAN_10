import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
