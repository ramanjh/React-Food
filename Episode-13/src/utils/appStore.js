import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import CartSlice from "./CartSlice";

const appStore = configureStore({
    reducer : {
        cart : CartSlice
    }

});

export default appStore ;
