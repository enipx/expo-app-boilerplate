import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PersistConfig } from 'redux-persist';

import globalReducer from './global';

export const reducers = combineReducers({
  global: globalReducer,
});

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'buy', 'paySubscriptions'],
};

export const rootReducer = persistReducer(persistConfig, reducers);
