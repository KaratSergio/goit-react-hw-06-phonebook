import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, {
  phonebook: contactsReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor =  persistStore(configureStore({
  reducer: persistedReducer,
}));

export default store;
