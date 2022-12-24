import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    orders:undefined,
    loading:false,
    error:""
}

const orderSlice = createSlice({
    name:"Foods",
    initialState,
    reducers:{
       orderRequest:(state) =>{
        state.loading = true
       },
       orderSuccess:(state,action) =>{
        state.loading = false
        state.orders = action.payload.orders
       },
       addOrderSuccess:(state,action) =>{
        state.orders.push(action.payload.order)
        state.loading = false
       },
       orderFail:(state,action)=>{
        state.orders = undefined
        state.loading = false
        state.error = action.payload
        }
    }
})

export const {orderRequest,orderFail,orderSuccess,addOrderSuccess} = orderSlice.actions

export default orderSlice.reducer