import { configureStore } from '@reduxjs/toolkit';
import displaySlice, { DisplayState } from './slices/display/displaySlice';

export interface RootState {
  display: DisplayState;
}

export const store = configureStore({
  reducer: {
    display: displaySlice,
  },
});
