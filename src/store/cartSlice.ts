import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, MenuItem } from "@/types";

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (state: CartState) => {
  state.totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  state.totalPrice = Number(
    state.items
      .reduce(
        (total, item) => total + item.item.price * item.quantity,
        0
      )
      .toFixed(2)
  );
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart(state, action: PayloadAction<MenuItem>) {
      const existingItem = state.items.find(
        (cartItem) => cartItem.item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          item: action.payload,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (cartItem) => cartItem.item.id !== action.payload
      );

      calculateTotals(state);
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(
        (cartItem) => cartItem.item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      calculateTotals(state);
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(
        (cartItem) => cartItem.item.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (cartItem) => cartItem.item.id !== action.payload
          );
        }
      }

      calculateTotals(state);
    },

    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
