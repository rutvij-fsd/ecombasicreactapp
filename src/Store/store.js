import {configureStore} from '@reduxjs/toolkit';
// import { productReducer } from '../Reducer/products';
import productsSlice from '../Reducer/productsSlice';
import cartSlice from '../Reducer/cartSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'root',
    version:1,
    storage
};

const reducer = combineReducers({
    product : productsSlice,
    cart: cartSlice,
});

const persistedReducer =  persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer: persistedReducer
});

export default store;