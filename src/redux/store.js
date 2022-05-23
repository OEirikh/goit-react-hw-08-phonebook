import {
  configureStore,
  // combineReducers
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// import {
// persistStore,
// persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { FilterSlice } from './FilterSlice';
import { ContactsApi } from './ContactsApi';
// import { authReducer } from 'redux/AuthSlise';

// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   blacklist: ['somethingTemporary'],
// };

// const persistedReducer = persistReducer(authPersistConfig, AuthSlise.reducer);

export const store = configureStore({
  reducer: {
    // auth: persistedReducer,
    filter: FilterSlice.reducer,
    [ContactsApi.reducerPath]: ContactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    // {
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    // }
    ContactsApi.middleware,
  ],
});

// export const persistor = persistStore(store.auth);
setupListeners(store.dispatch);
