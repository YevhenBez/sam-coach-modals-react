import { contactsReducer } from './contactsSlice';
import { filterReducer } from '../redux/filterSlice';
import { authReducer } from '../redux/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducerAuth,
};
