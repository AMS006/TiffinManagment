import { configureStore } from "@reduxjs/toolkit";
import userSlice from './user/user.reducer'
import providerSlice from './provider/provider.reducer'
import foodSlice from './food/food.reducer'
import orderSlice from './order/order.reducer'
export const store = configureStore({
    reducer:{
        user:userSlice,
        provider:providerSlice,
        foods:foodSlice,
        orders:orderSlice
    }
});