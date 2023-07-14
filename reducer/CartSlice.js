import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    cart:[],
    cartTotal:0,
}

export const cartSlice = createSlice({ 
    name:'Cart',
    initialState,
    reducers:{
        addToCart:(state,action) => { 

            const existingProduct = state.cart.find(
                (product) => product.cartItem.id === action.payload.id
              );
            
            return {
                ...state,
                cart: [...state.cart, action.payload]
              };
        },
        removeCart:() => { 

        },
        clearCart:() => { 
            state.cart = []
        },
        setCartTotal:() => { 

        }
    }
})

export const {addToCart,removeCart,clearCart,setCartTotal} = cartSlice.actions

export const CartReducer = cartSlice.reducer