import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    totalAmount: 0,
  },
  reducers: {
    addTocart(state, action) {
      if (
        !state.cartItem.find(
          (product) => product.id === Number(action.payload.id)
        )
      ) {
        const product = { ...action.payload, number: 1 };

        state.cartItem.push(product);
      } else {
        const productIndex = state.cartItem.findIndex(
          (obj) => obj.id == action.payload.id
        );

        const ItemQuentity = state.cartItem[productIndex].number;
        const NewCartItem = state.cartItem.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, number: ItemQuentity + 1 };
          } else {
            return product;
          }
        });

        state.cartItem = NewCartItem;
      }
    },
    removeFromcart(state, action) {
      if (action.payload.number === 0) {
        const NewcartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItem = NewcartItem;
      } else {
        const productIndex = state.cartItem.findIndex(
          (obj) => obj.id == action.payload.id
        );

        const ItemQuentity = state.cartItem[productIndex].number;
        const newCartItem = state.cartItem.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, number: ItemQuentity - 1 };
          } else {
            return product;
          }
        });
        state.cartItem = newCartItem;
      }
    },
    getTotal(state, action) {
      let amount = 0;
      for (let item in state.cartItem) {
        if (state.cartItem[item].number > 0) {
          amount += state.cartItem[item].number * state.cartItem[item].price;
        }
      }

      state.totalAmount = amount;
    },
  },
});

export const { addTocart, removeFromcart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
export const cartItem = (state) => state.cartItem;
