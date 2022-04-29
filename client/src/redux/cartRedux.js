import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
            console.log(state.products.length)
        },
        toRemove:(state, action) =>{

            if (state.quantity > 0){
                state.quantity -= 1;
            }


            state.total -= action.payload.price * action.payload.quantity;
            const { id } = action.payload;
            // console.log(id);

            state.products = state.products.filter(item => item.id !== id);

        },
        toRemoveAll:(state, action) =>{
                const { id } = action.payload;
                state.quantity = 0;
                state.products = state.products.filter(item => item.id !== id);

        }
    },
});

export const {addProduct, toRemove, toRemoveAll} = cartSlice.actions;
export default cartSlice.reducer;