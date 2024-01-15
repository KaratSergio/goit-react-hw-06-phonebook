import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store, { serialize: false });

export default store;

