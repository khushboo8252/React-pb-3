// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/UserSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    // Add other reducers here if any
  },
});

export default store;
