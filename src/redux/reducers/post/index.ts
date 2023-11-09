import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_POST_STATE } from './constansts';
import { StateType } from './type';

export const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_POST_STATE,
  reducers: {
    setViewPost: (state: StateType, action: PayloadAction<string>) => {
      const posts = state.posts.slice();
      posts.push(action.payload);
      const newState = {
        ...state,
        posts,
      };
      newState;
    },
    dropState: (state: StateType) => {
      state = INITIAL_POST_STATE;
    },
  },
});

export const postReducer = postSlice.reducer;
