import axios from 'axios'
import { reviewRequest,reviewSuccess,reviewFail, addReviewSuccess } from './review.reducer'

export const addReview = (data) => async(dispatch)=>{
    try {
        dispatch(reviewRequest())
        const review = await axios({
            method:"POST",
            url:"http://localhost:4000/api/v1/review",
            data
        })
        dispatch(addReviewSuccess(review.data))
    } catch (error) {
        return dispatch(reviewFail(error.response.data.message));    
    }
}
export const getAllReview = ({_id}) => async(dispatch)=>{
    try {
        dispatch(reviewRequest())
        const review = await axios({
            method:"GET",
            url:`http://localhost:4000/api/v1/review/${_id}`,
        })
        dispatch(reviewSuccess(review.data))
    } catch (error) {
        return dispatch(reviewFail());    
    }
}