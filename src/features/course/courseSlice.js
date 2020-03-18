import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'course',
  initialState: {
    value: ['React Native', 'ReactJs', 'MongoDB', 'JavaScript'],
  },
  reducers: {
    add: (state, action) => {
        console.log(action)
        state.value.push(action.payload)
    }
  }
})

export const { add } = slice.actions;

export default slice.reducer;
