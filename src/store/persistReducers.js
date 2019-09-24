import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistConfig = {
    key: 'mybarber',
    storage: AsyncStorage,
    whiteList: ['auth', 'user'],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};
