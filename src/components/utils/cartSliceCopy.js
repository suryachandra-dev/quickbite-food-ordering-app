import { createSlice } from "@reduxjs/toolkit";
const cartSliceCopy=createSlice({
    //payload='pizza
    name:'cart',
    initialState:{
        cartItems:[],
    },reducers:{
        addToCart:(state,action)=>{
            //mutating the state here 
            state.cartItems.push(action.payload);
        },removeFromCart:(state,action)=>{
            state.cartItems.pop();
        },clearCart:(state,action)=>{
            // state.cartItems=[];this will not work
            state.cartItems.length = 0;
        }
    }
})
export const {addToCart,removeFromCart,clearCart}=cartSliceCopy.actions;
export default cartSliceCopy.reducer;





















// const cartSlice=createSlice({
//     name:'cart',
//     initialState:{
//         cartItems:[]
//     },
//     reducers:{
//         addToCart: (state,action)=>{
//             state.cartItems.push(action.payload);
//         },
//         removeFromCart: (state,action)=>{
//             state.cartItems=state.cartItems.filter(item=>item.id!==action.payload);
//             state.cartItems.pop();
//         },
//         clearCart: (state,action)=>{
//             state.cartItems=[];
//         }
//     }
// });
// export const{addToCart,removeFromCart,clearCart}=cartSlice.actions;
// export default cartSlice.reducer;