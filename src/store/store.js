import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "../store/cartSclice";
import shopSclice from "./shopSclice";
const store = configureStore({
  reducer: {
    cart: cartSclice,
    shop: shopSclice,
  },
});

export default store;
