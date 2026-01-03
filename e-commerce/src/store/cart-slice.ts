import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

type CartType = {
  items: CartItem[];
  quantity: number;
};
const cartInitVals: CartType = {
  items: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitVals,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const exsistingItem = state.items.find((i) => i.id === item.id);
      state.quantity += 1;
      if (exsistingItem) {
        exsistingItem.quantity += 1;
      } else {
        state.items.push(item);
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const exsistingItem = state.items.find((i) => i.id === id);

      state.quantity -= 1;

      if (exsistingItem && exsistingItem?.quantity > 1) {
        exsistingItem.quantity -= 1;
      } else {
        state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
