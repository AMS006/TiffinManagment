import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    provider:undefined,
    allProviders:undefined,
    isProvider:false,
    loading:false,
    error:""
}
const providerSlice = createSlice({
    name:"Provider",
    initialState,
    reducers:{
        providerRequest:(state) =>{
            state.loading = true
        },
        providerSuccess:(state,action)=>{
            state.provider = action.payload.provider
            state.loading = false
            state.isProvider = true
        },
        allProvidersSuccess:(state,action) =>{
            state.loading = false
            state.allProviders = action.payload.allProviders
        },
        allProvidersFail:(state) =>{
            state.loading = false
            state.allProviders = undefined
        },
        providerFail:(state,action)=>{
            state.provider = undefined
            state.loading = false
            state.error = action.payload
        },
        providerLogout:(state) =>{
            state.provider = undefined
            state.isProvider = false
            state.loading = false
        }
    }
})

export const {providerRequest,providerSuccess,providerFail,providerLogout,allProvidersSuccess,allProvidersFail} = providerSlice.actions

export default providerSlice.reducer