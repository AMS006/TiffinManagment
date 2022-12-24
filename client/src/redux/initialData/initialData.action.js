import axios from 'axios'
import { initialDataFail, initialDataRequest, initialDataSuccess } from './initialData.reducer'

export const getInitialData = async(dispatch) =>{
    try {
        dispatch(initialDataRequest());
        const data = await axios({
            method:"GET",
            url:"http://localhost:4000/api/v1/initialData"
        })
        dispatch(initialDataSuccess(data.data))
    } catch (error) {
        dispatch(initialDataFail(error))
    }
}