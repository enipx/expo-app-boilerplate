import { globalSlice } from './slice';

import { RootState } from '@/redux/store';

/**
 * This help create all single source of truth while getting the send slice data
 * @param state: RootState
 * @returns globalSlice data information
 */
export const selectGlobalState = (state: RootState) => state.global;

export const { setGlobalCredentials } = globalSlice.actions;

export default globalSlice.reducer;
