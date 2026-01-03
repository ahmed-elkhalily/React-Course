import type { Product } from '@/types/product.type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Cart = {
  items: Array<
    Product & {
      quantity: number;
    }
  >;
  quantity: number;
};

const cartInitVals: Cart = {
  items: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitVals,
  reducers: {
    addItemToCart(state, action: PayloadAction<Product>) {
      state.quantity += 1;

      const product = action.payload;
      const exsistingItem = state.items.find((i) => i.id === product.id);

      if (exsistingItem) {
        exsistingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.quantity -= 1;

      const id = action.payload;
      const exsistingItem = state.items.find((i) => i.id === id);

      if (exsistingItem && exsistingItem.quantity > 1) {
        exsistingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
