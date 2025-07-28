import {createSlice} from '@reduxjs/toolkit';


const initialState={
    user:null,
    token:localStorage.getItem('token') || null,
    isAuthentication :false,
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
            state.isAuthenticated=true;
            localStorage.setItem('token',action.payload.token);
        },
        logout:(state)=>{
            state.user=null;
            state.token=null;
            state.isAuthenticated=false;
            localStorage.removeItem('token');
        },
    },
});

export const {setuser,logout} =authSlice.actions;
export default authSlice.reducer;