import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:undefined,
    loading:false,
    error:""
}
const userSlice = createSlice({
    name:"User",
    initialState,
    reducers:{
        userRequest:(state) =>{
            state.loading = true
            state.error = ""
        },
        userSuccess:(state,action)=>{
            state.user = action.payload.user
            state.loading = false
            state.error = ""
        },
        userFail:(state,action)=>{
            state.user = undefined
            state.loading = false
            state.error = action.payload
        },
        userLogout:(state) =>{
            state.user = undefined
            state.loading = false
            state.error = ""
        }
    }
})

export const {userRequest,userSuccess,userFail,userLogout} = userSlice.actions

export default userSlice.reducer