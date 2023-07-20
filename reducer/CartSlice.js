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
    removeCart: (state,action) => {
      const { id, qty } = action.payload;
      let updatedCart = JSON.parse(JSON.stringify(state.cart));
      console.log(updatedCart[id])

      return {...state,
            cart:{...state.cart,[id]:{...updatedCart[id],qty:updatedCart[id].qty - qty}}
      }
   
    },
    clearCart: () => {
      return state.cart = [];
    },
    setCartTotal: () => {},
  },
});

export const { addToCart, removeCart, clearCart, setCartTotal } =
  cartSlice.actions;

export const CartReducer = cartSlice.reducer;
