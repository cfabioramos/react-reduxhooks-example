import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import courseReducer from '../features/course/courseSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    course: courseReducer
  },
});
