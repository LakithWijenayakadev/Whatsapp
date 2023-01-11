import { createSlice } from '@reduxjs/toolkit';
import avatar1 from '../src/Images/Profile.jpg';
import avatar2 from '../src/Images/Profile2.jpg';
import avatar3 from '../src/Images/Profile3.jpg';

const initialState = {


    Chat_List: [
        {
            id: 1,
            ProfilePic: avatar1,
            Name: 'John David',
            Message: "Hi hi.",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: avatar2,
            Name: 'Jack Harper',
            Message: "Good morning bro.",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: avatar3,
            Name: 'Lily Freya',
            Message: "I want to meet you today.",
            Time: "10:45 pm",
        },
        {
            id: 1,
            ProfilePic: avatar1,
            Name: 'John David',
            Message: "Hi hi.",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: avatar2,
            Name: 'Jack Harper',
            Message: "Good morning bro.",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: avatar3,
            Name: 'Lily Freya',
            Message: "I want to meet you today.",
            Time: "10:45 pm",
        },
        {
            id: 1,
            ProfilePic: avatar1,
            Name: 'John David',
            Message: "Hi hi.",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: avatar2,
            Name: 'Jack Harper',
            Message: "Good morning bro.",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: avatar3,
            Name: 'Lily Freya',
            Message: "I want to meet you today.",
            Time: "10:45 pm",
        },
    ],

}

export const ChatListSlice = createSlice({
    name: 'ChatList',
    initialState,

});

export const { } = ChatListSlice.actions
export default ChatListSlice.reducer