import { createSlice } from '@reduxjs/toolkit';

const initialState = {

   
   chatName:"",
   profilePic:"",

   Message_list : [
  
    {
        id: 1,
        Type: 1,
        Message: "Hi hi😏",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 2,
        Message: "Yes bro.😏",
        Time: "10:45 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "whatsap..",
        Time: "8:03 pm",
    },
    {
        id: 1,
        Type: 2,
        Message: "Im good , how about you..!😏",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 1,
        Message: "Good bro.",
        Time: "10:45 pm",
    },
    {
        id: 1,
        Type: 2,
        Message: "I was trying to call you yesterday. But i think there was a issue in my network connection.",
        Time: "8:03 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "I think you have to pay your bills  😏 ",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 2,
        Message: "Im not going to pay bills. 😈",
        Time: "10:45 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "Then you have to go to jail bro. 😈",
        Time: "8:03 pm",
    },
    {
        id: 1,
        Type: 2,
        Message: "Oh its bad",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 2,
        Message: "This connectin is too expencive bro.",
        Time: "10:45 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "then you have to try another service provdier..",
        Time: "8:03 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "😏😏😏",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 2,
        Message: "I will think about that bro.",
        Time: "10:45 pm",
    },
    {
        id: 1,
        Type: 1,
        Message: "Take care brother i have to now. i will catch you later.",
        Time: "8:03 pm",
    },
    {
        id: 1,
        Type: 2,
        Message: "Ok bro TC \n bye..!",
        Time: "3:45 am",
    },
    {
        id: 1,
        Type: 1,
        Message: "Byee...!",
        Time: "10:45 pm",
    },
],
    
}

export const AreaCategorySlice = createSlice({
    name: 'AreaCategory',
    initialState,
    reducers: {
        GetchatName: (state, action) => {
            state.chatName = action.payload
        },
        GetprofilePic: (state, action) => {
            state.profilePic = action.payload
        },
      
    }
});

export const { GetchatName,GetprofilePic} = AreaCategorySlice.actions
export default AreaCategorySlice.reducer