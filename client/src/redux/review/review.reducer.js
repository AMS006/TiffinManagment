import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    reviews:[],
    error:""
}
const reviewSlice = createSlice({
    name:"Review",
    initialState,
    reducers:{
        reviewRequest:(state)=>{
            state.loading = true
        },
        reviewSuccess:(state,action)=>{
            state.loading = false
            state.reviews = action.payload.review
        },
        addReviewSuccess:(state,action) =>{
            state.loading = false
            state.reviews.push(action.payload.review)
            window.alert("Review Added Successfully")
        },
        reviewFail:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {reviewRequest,reviewSuccess,reviewFail,addReviewSuccess} = reviewSlice.actions

export default reviewSlice.reducer