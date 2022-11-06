import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : localStorage.setItem("carts", JSON.stringify([])),
    error: null,
  },
  reducers: {
    addToCarts: (state, action) => {
      //check carts not empty or exist
      if (!state.carts) {
        //when carts its empty add the new item to the carts
        //{...state, state.carts: action.payload}
        state.carts = [action.payload];
      } else {
        //when carts not empty
        //check the rquested item is already exist in cart
        const existItem = state.carts.find((i) => i.id === action.payload.id);

        if (existItem) {
          //item item exist then increase the quantity with passed quantity
          let update = state.carts.map((i) => {
            if (i.id === action.payload.id) {
              return { ...i, quantity: i.quantity + action.payload.quantity };
            } else {
              return i;
            }
          });

          state.carts = update;
        } else {
          //when item not found then append new item to exist carts
          state.carts = [...state.carts, action.payload];
        }
      }

      //finally update the local storage value
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    increaseQuantity: (state, action) => {
      //find the item from state
      const item = state.carts.find(
        (product) => product.id === action.payload.id
      );

      //if item quantity greater than 1 then increase the quantity by 1
      if (item.quantity >= 1) {
        //if not then decrease the quantity
        state.carts = state.carts.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: (item.quantity += 1) }
            : product
        );
      }

      //update the localstorage value
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    decreaseQuantity: (state, action) => {
      //find the item from state
      const item = state.carts.find(
        (product) => product.id === action.payload.id
      );

      //if item quantity then on decrease remove the item
      if (item.quantity === 1) {
        state.carts = state.carts.filter(
          (product) => product.id !== action.payload.id
        );
      }

      //if not then decrease the quantity
      state.carts = state.carts.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: (item.quantity -= 1) }
          : product
      );

      //update the localstorage value
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeFormCart: (state, action) => {
      //find the item from state
      const item = state.carts.find(
        (product) => product.id === action.payload.id
      );

      //if item exist then filter the states
      if (item) {
        state.carts = state.carts.filter(
          (product) => product.id !== action.payload.id
        );
      }

      //update the localstorage value
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

//export slice default state
export const cartState = (state) => state.carts;

//export reducer
export const {
  addToCarts,
  increaseQuantity,
  decreaseQuantity,
  removeFormCart,
} = CartSlice.actions;

//export default slice
export default CartSlice.reducer;
