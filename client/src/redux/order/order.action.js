import axios from 'axios'
import {orderRequest,orderFail,addOrderSuccess,orderSuccess} from './order.reducer'
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
export const addOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`http://localhost:4000/api/v1/order`,
            data
        })
        dispatch(addOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}