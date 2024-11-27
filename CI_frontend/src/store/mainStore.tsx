import { configureStore } from '@reduxjs/toolkit'
import { ciApi } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    [ciApi.reducerPath]: ciApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ciApi.middleware),
})

setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
