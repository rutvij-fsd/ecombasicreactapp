import {createReducer} from '@reduxjs/toolkit';

const initialState = [];

export const productReducer = createReducer(initialState,{
    UPDATE_PRODUCT : (state,action)=>{
        return action.product;
    }
});