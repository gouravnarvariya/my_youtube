import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Appslice";

const store = configureStore(
   { reducer:{
    app:appSlice
    }}
)

export default store;