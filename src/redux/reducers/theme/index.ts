import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_THEME_STATE } from './constants';
import { ITheme } from './type';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: INITIAL_THEME_STATE,
  reducers: {
    applyTheme: (_, action: PayloadAction<ITheme>) => {
      Object.assign({}, { theme: action.payload });
    },
  },
});

export const themeReducer = themeSlice.reducer;
