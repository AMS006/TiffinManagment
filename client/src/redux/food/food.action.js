import axios from 'axios'
import { foodRequest,foodSuccess,foodFail,getFoodByIdSuccess,addFoodSuccess,deleteFoodSuccess} from './food.reducer';

export const getAllFood = (_id) => async(dispatch) =>{
    try {
        dispatch(foodRequest());
        const foodData = await axios({
            method:"GET",
            url:`http://localhost:4000/api/v1/food/provider/${_id}`,
        })
        return dispatch(foodSuccess(foodData.data))
    }catch (error) {
        return dispatch(foodFail(error.response.data.message));
    }
}
export const getFoodById = (_id) =>async(dispatch) =>{
    try {
        dispatch(foodRequest());
        const food =  await axios({
            method:"GET",
            url:` http://localhost:4000/api/v1/food/${_id}`
        })
        return dispatch(getFoodByIdSuccess(food.data))
    } catch (error) {
        return dispatch(foodFail(error.response.data.message));
    }
}
export const addFood = (data) => async(dispatch) =>{
    try {
        dispatch(foodRequest())
        console.log(data)
        const food = await axios({
            method:"POST",
            url:"http://localhost:4000/api/v1/food",
            data
        })
        return dispatch(addFoodSuccess(food.data))
    } catch (error) {
        return dispatch(foodFail(error.response.data.message));
    }
}
export const deleteFood = (_id) => async(dispatch)=>{
    try {
        dispatch(foodRequest())
        await axios({
            method:"DELETE",
            url:`http://localhost:4000/api/v1/food/${_id}`
        })
        dispatch(deleteFoodSuccess(_id));
    } catch (error) {
        return dispatch(foodFail(error.response.data.message));
    }
}
