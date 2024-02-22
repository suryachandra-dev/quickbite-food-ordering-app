import { configureStore } from "@reduxjs/toolkit";
import myCustomCartReducer from "./cartSlice";
import myCustomCartReducer2 from "./cartSliceCopy";
const appStore=configureStore(
{
    reducer:{//whole big app reducer
        cart: myCustomCartReducer,
        
        // user:userReducer,
    }
}
);
export default appStore;