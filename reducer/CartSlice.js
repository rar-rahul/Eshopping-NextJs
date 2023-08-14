import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, qty } = action.payload;

      const existingProduct = Object.keys(state.cart).some(
        (productId) => productId == id
      );
      //const existsPid = Object.values(state.cart).find((productId) => productId == id)

      const constData = JSON.parse(JSON.stringify(state.cart));

      if (existingProduct) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: {
              ...action.payload,
              qty: constData[id].qty + action.payload.qty,
            },
          },
        };
      } else {
        return {
          ...state,
          cart: { ...state.cart, [id]: action.payload },
        };
      }
    },
    removeCart: (state, action) => {
      const { id, qty } = action.payload;
      let updatedCart = JSON.parse(JSON.stringify(state.cart));

      if (id in updatedCart) {
        updatedCart[id].qty =
          JSON.parse(JSON.stringify(state.cart))[id].qty - qty;
      }

      if (updatedCart[id].qty <= 0) {
        delete updatedCart[id];
      }

      if (id in updatedCart) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: { ...updatedCart[id], qty: updatedCart[id].qty },
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: { qty: 0 },
          },
        };
      }
    },
    clearCart: () => {
      return (state.cart = []);
    },
    setCartTotal: (state, action) => {
      const ctotal = Object.entries(action.payload)
      .reduce(
        (acc, [key, value]) => {
          return acc + Number(value.price) * value.qty;
        },
        0
      );
      state.cartTotal = ctotal;
    },
  },
});

export const { addToCart, removeCart, clearCart, setCartTotal } =
  cartSlice.actions;

export const CartReducer = cartSlice.reducer;
