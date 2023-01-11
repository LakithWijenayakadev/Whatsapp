import { configureStore } from '@reduxjs/toolkit';

import ChatReducer from '../redux/ChatScreenSlice';
import ChatListReducer from '../redux/ChatListSlice';
import StatusListReducer from '../redux/StatusListSlice';

export default configureStore({
  reducer: {
    ChatScreen: ChatReducer,
    ChatList: ChatListReducer,
    StatusList: StatusListReducer
  }
})