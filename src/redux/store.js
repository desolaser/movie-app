import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authSlice from './slice/authSlice'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authSlice
}) 

const store = configureStore({
  reducer: {    
    root: rootReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

const persistor = persistStore(store)

export default store
export { persistor }