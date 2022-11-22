import {configureStore} from '@reduxjs/toolkit';
// import { productReducer } from '../Reducer/products';
import productsSlice from '../Reducer/productsSlice';
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
});

const persistedReducer =  persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer: persistedReducer
});

export default store;