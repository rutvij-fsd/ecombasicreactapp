import {createReducer} from '@reduxjs/toolkit';

const initialState = [];

export const productReducer = createReducer(initialState,{
    FETCH_PRODUCT : (state,action)=>{
        return action.product;
    },
    UPDATE_PRODUCT_SUCCESS : (state,action)=>{
        return state.map((product,id)=>{
            if(id !== action.product.id-1){
                return product;
            }
            return {...product,...action.product}
        });
    }
});