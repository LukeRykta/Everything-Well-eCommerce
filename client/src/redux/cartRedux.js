import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        toRemove:(state, action) =>{
            const {id} = action.payload;
            if (state.quantity === 0){
                state.quantity = 0;
            }else {
                state.quantity -= 1;
            }
            state.products = state.products.filter(product => product.id !== id);

            state.total -= action.payload.price * action.payload.quantity;
        },
    },
});

export const {addProduct, toRemove} = cartSlice.actions
export default cartSlice.reducer;