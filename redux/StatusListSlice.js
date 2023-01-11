import { createSlice } from '@reduxjs/toolkit';
import avatar1 from '../src/Images/Profile.jpg';
import avatar2 from '../src/Images/Profile2.jpg';
import avatar3 from '../src/Images/Profile3.jpg';
import Status1 from '../src/Images/status1.jpg';
import Status2 from '../src/Images/status2.jpg';
import Status3 from '../src/Images/status3.jpg';
const initialState = {


    Status_List: [
        {
            id: 1,
            ProfilePic: Status1,
            Name: 'John David',
            Message: "1 minute ago",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: Status2,
            Name: 'Jack Harper',
            Message: "7 minute ago",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: Status3,
            Name: 'Lily Freya',
            Message: "25 minute ago",
            Time: "10:45 pm",
        },
        {
            id: 1,
            ProfilePic: Status1,
            Name: 'John David',
            Message: "1 minute ago",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: Status2,
            Name: 'Jack Harper',
            Message: "7 minute ago",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: Status3,
            Name: 'Lily Freya',
            Message: "25 minute ago",
            Time: "10:45 pm",
        },
        {
            id: 1,
            ProfilePic: Status1,
            Name: 'John David',
            Message: "1 minute ago",
            Time: "8:03 pm",
        },
        {
            id: 1,
            ProfilePic: Status2,
            Name: 'Jack Harper',
            Message: "7 minute ago",
            Time: "3:45 am",
        },
        {
            id: 1,
            ProfilePic: Status3,
            Name: 'Lily Freya',
            Message: "25 minute ago",
            Time: "10:45 pm",
        },
    ],

}

export const StatusListSlice = createSlice({
    name: 'StatusList',
    initialState,

});

export const { } = StatusListSlice.actions
export default StatusListSlice.reducer