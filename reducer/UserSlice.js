import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData:null,
    token:null
}

export const userSlice = createSlice({ 
    name:'User',
    initialState,
    reducers:{
        setUserData:(state,action) => {
            state.userData = action.payload;
        },
        setUserToken:(state,action) => {
            state.token = action.payload;
        },
        removeToken:(state,action) => { 
            state.token = null;
            state.userData = null;
        }

    }
})

// Action creators are generated for each case reducer function
export const { setUserData  , setUserToken,removeToken } = userSlice.actions

export const UserReducer = userSlice.reducer