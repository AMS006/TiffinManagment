import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/user.reducer'
export const store = configureStore({
    reducer:{
        user:userSlice
    }
});