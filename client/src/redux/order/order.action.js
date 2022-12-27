import axios from 'axios'
import {orderRequest,orderFail,addOrderSuccess,orderSuccess,userOrderSuccess,updateOrderSuccess} from './order.reducer'
export const getAllOrders = () => async(dispatch) =>{
    try{
        dispatch(orderRequest())
        const orders = await axios({
            method:"GET",
            url:`http://localhost:4000/api/v1/order/provider`
        })
        dispatch(orderSuccess(orders.data))
    }catch(error){
        return dispatch(orderFail(error.response.data.message));
    }
}
export const getUserOrders = () => async(dispatch) =>{
    try {
        dispatch(orderRequest())
        const orders = await axios({
            method:"GET",
            url:"http://localhost:4000/api/v1/order/user"
        })
        console.log(orders.data)
        return dispatch(userOrderSuccess(orders.data));
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const addOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`http://localhost:4000/api/v1/order`,
            data
        })
        console.log(order)
        dispatch(addOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const updateOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`http://localhost:4000/api/v1/order/updateStatus`,
            data
        })
        dispatch(updateOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
