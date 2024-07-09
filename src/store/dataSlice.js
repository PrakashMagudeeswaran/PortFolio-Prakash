import { createSlice } from "@reduxjs/toolkit";

const dataSlice= createSlice({
    name:"data",
    initialState:{
      personalData:{
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: ''
      },
      alarm:false
    },
    reducers:{
        personalData:(state,action)=>{
            state.personalData=action.payload
        },
        setalarm:(state)=>{
            state.alarm=!state.alarm
        }
    }})

    export const{personalData,setalarm} = dataSlice.actions;

    export default dataSlice.reducer;










