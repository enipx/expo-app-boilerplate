import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GlobalState = {
  name: string;
};

export const initialState: GlobalState = {
  name: 'Hashir',
};

export const globalSlice = createSlice({
  // name used in action type
  name: 'global',
  // defined initial state
  initialState,
  // defined reducer, an object case reducer. key names will be used to generate account
  reducers: {
    setGlobalCredentials: (state, action: PayloadAction<GlobalState>) => {
      const newState = {
        ...state,
        ...action.payload,
      };
      return newState;
    },
  },
});
