import { createSlice } from "@reduxjs/toolkit";
const getInitialTotalItems = () => {
    const storedTotalItems = localStorage.getItem("totalItems");
    return storedTotalItems ? parseInt(storedTotalItems) : 0;
  };
const cartSlice = createSlice({
  //payload='pizza
  name: "cart",
  initialState: {
    cartItems: [],
    // totalItems: 0,
    totalItems: getInitialTotalItems(), // Initialize from local storage
  },
  reducers: {
    addToCart: (state, action) => {
      //Vanilla(Older) Redux =>DONT MUTATE THE STATE
      //const newState = [...state];
      //newState.push(action.payload);
      //return newState;

      //Redux Toolkit uses immer BTS
      //we have to mutate the state
      // const newItem=action.payload;
      // console.log(newItem);
      // console.log(state.cartItems);
      // state.cartItems.push(newItem);
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.card.info.id === newItem.card.info.id
      );
      if (!existingItem) {
        state.cartItems.push(newItem);
        
      }
      state.totalItems += 1;
      localStorage.setItem("totalItems", state.totalItems.toString()); // Update local storage
      console.log("addToCart is called ");
    },
    // removeFromCart: (state, action) => {
    //     const itemToRemove = action.payload;
    //     console.log(itemToRemove);
    //     // state.cartItems = state.cartItems.filter((item)=>{
    //     //     return item.card.info.id !=itemToRemove.card.info.id;
    //     // });
    //     console.log(state.cartItems);
    // //   state.cartItems.remove(action.payload);
    //   //original State=['pizza'];
    //   state.totalItems -= 1;
    //   localStorage.setItem("totalItems", state.totalItems.toString()); // Update local storage
    //   console.log("removeFromCart is called ");
    // }
    removeFromCart: (state, action) => {
      const { item, count } = action.payload;
      const itemToRemove = item;
      const existingItemIndex = state.cartItems.findIndex(
          (item) => item.card.info.id === itemToRemove.card.info.id
      );
  
      if (existingItemIndex !== -1) {
          if (count === 1) { // If count is 1, remove the item from the cart
              state.cartItems.splice(existingItemIndex, 1);
          }
          state.totalItems -= 1;
          localStorage.setItem("totalItems", state.totalItems.toString()); // Update local storage
          console.log("removeFromCart is called ");
      }
  },
    clearCart: (state, action) => {
      //Either mutate the the existing state or return a new state
      // console.log(state);
      // state.cartItems=[];this will not work
      state.cartItems.length = 0;
      state.totalItems = 0;
      localStorage.removeItem("totalItems"); // Clear count from local storage
      // state=[];
      // console.log(state);
      // return {cartItems:[]};//original State=[]
    },
    cartCount: (state, action) => {
      const newCount = action.payload;
      const oldCount = state.totalItems+newCount;
      if(oldCount > -1){
        state.totalItems += newCount;
        localStorage.setItem("totalItems", state.totalItems.toString()); // Update local storage
      }else{
        state.totalItems = 0;
        localStorage.removeItem("totalItems"); // Clear count from local storage
      }
    },
  },
});
export const { addToCart, removeFromCart, clearCart, cartCount } =
  cartSlice.actions;
export default cartSlice.reducer;

