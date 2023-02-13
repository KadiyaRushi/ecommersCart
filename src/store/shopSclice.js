import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ProductItem = createAsyncThunk("shop/fetch", async () => {
  const res = await fetch(process.env.REACT_APP_APILINK);
  const data = await res.json();
  return data;
});
export const searchItem = createAsyncThunk("shop/fetch", async (name) => {
  const res = await fetch(`${process.env.REACT_APP_APILINK}/search?q=${name}`);
  const data = await res.json();
  return data;
});
export const splitpage = createAsyncThunk("shop/fetch", async (num) => {
  const res = await fetch(
    `${process.env.REACT_APP_APILINK}?limit=10&skip=${num}`
  );
  const data = await res.json();
  return data;
});
const shopSclice = createSlice({
  name: "shop",
  initialState: { responseData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductItem.fulfilled, (state, action) => {
      state.responseData = action.payload;
    });
  },
});
export const {} = shopSclice.actions;

export default shopSclice.reducer;
