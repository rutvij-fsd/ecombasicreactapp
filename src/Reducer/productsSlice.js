import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],

  reducers: {
    FETCH_PRODUCT: (state, action) => {
      if(state.length>0){
        return [...state];
      }
      else{
        return action.payload;
      }
    },
    UPDATE_PRODUCT_SUCCESS: (state, action) => {
      return state.map((product, id) => {
        const index = state.findIndex((object) => {
          return object.id === action.payload.id;
        });
        if (id !== index) {
          return product;
        }
        return { ...product, ...action.payload };
      });
    },
    DELETE_PRODUCT: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    ADD_PRODUCT: (state, action) => {
      return [action.payload, ...state];
    },
    SORT_PRODUCT: (state, action) => {
     return state.sort((a, b) => (a.price < b.price ? 1 : -1));

    },
  },
});

export const {
  FETCH_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  SORT_PRODUCT
} = productsSlice.actions;

export default productsSlice.reducer;
