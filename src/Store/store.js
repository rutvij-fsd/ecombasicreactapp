import {configureStore} from '@reduxjs/toolkit';
import { productReducer } from '../Reducer/products';

const store = configureStore({
    reducer:{
        product : productReducer,
    },
});

export default store;