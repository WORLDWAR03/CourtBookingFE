import { createSlice} from "@reduxjs/toolkit";


const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem('user')) || {},
    openLoader:false
}

const generalSlice = createSlice({
    name:'user',
    initialState:INITIAL_STATE,
    reducers:{
   
        setUser:(state, action)=>{
            state.user = action.payload
            localStorage.setItem('user',JSON.stringify(action.payload))
        },

        setOpenLoader:(state, action)=>{
            state.user=action.payload
        }

    }
})

export const {setUser, setOpenLoader} =generalSlice.actions;
export default generalSlice.reducer