import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '@/slices/cartSlice';
import paginationReducer, { fetchPaginatedProducts } from '@/slices/paginationSlice';
import productsReducer, { fetchProducts } from '@/slices/productsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
        pagination: paginationReducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

store.dispatch(fetchProducts());
store.dispatch(fetchPaginatedProducts({ page: 1, perPage: 4, category: "" }));
setupListeners(store.dispatch)

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



