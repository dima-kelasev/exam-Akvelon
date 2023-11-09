import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_THEME_STATE } from './constants';
import { APPLY_THEME } from '../../themeActions';

const slice = createSlice({
  name: APPLY_THEME,
  initialState: INITIAL_THEME_STATE,
  reducers: {
    applyTheme: (_, action: PayloadAction) => {
      Object.assign({}, { theme: action.payload });
    },
  },
});

export const themeReducer = slice.reducer;
