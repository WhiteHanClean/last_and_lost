import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import foundSlice from './foundSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const store = configureStore({
  reducer: {
    auth: persistReducer(
      {
        key: 'auth',
        storage,
      },
      authReducer
    ),
    found: persistReducer(
      {
        key: 'found',
        storage,
      },
      foundSlice
    ),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'persist/PERSIST',
        'persist/REHYDRATE',
        'pause/PAUSE',
        '/purge/PURGE',
        '/register/REGISTER',
      ],
    },
  }),
});
export const persistor = persistStore(store);

export default store;
