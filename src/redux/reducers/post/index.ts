import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_POST_STATE } from './constansts';
import { PostStateType } from './type';
import { Post } from '../../../types/Todos';

export const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_POST_STATE,
  reducers: {
    setViewPost: (state: PostStateType, action: PayloadAction<string>) => {
      const posts = state.posts.slice();
      posts.push(action.payload);
      const newState = {
        ...state,
        posts,
      };
      newState;
    },
    dropState: (state: PostStateType) => {
      state = INITIAL_POST_STATE;
    },
    // eslint-disable-next-line no-empty-pattern
    callGetPostSaga: ({}, {}: PayloadAction) => {},
  },
});

export const postReducer = postSlice.reducer;