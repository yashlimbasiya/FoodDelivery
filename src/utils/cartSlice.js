import {createSlice} from "@reduxjs/toolkit";
import { create } from "domain";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items: [],
    },
    reducers :{
        addItem: ( state, action) =>{                                     // state is always previous here we just modify
            state.items.push(action.payload);
        },                                                           // take a state and modify it donot return anything
        clearCart: (state, action) =>{
            state.items = [];

        },
        removeItem: ( state, action) =>{
            state.items.pop();
        },
    },
})

 export const { addItem, removeItem, clearCart} = cartSlice.actions
 export default cartSlice.reducer;

