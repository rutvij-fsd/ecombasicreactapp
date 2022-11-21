import {createReducer} from '@reduxjs/toolkit';


const initialState = [];

export const productReducer = createReducer(initialState,{
    FETCH_PRODUCT : (state,action)=>{
        return action.product;
    },
    UPDATE_PRODUCT_SUCCESS : (state,action)=>{
        return state.map((product,id)=>{
            const index = state.findIndex(object => {
                return object.id === action.product.id;
              });
            if(id !== index){
                return product;
            }
            return {...product,...action.product}
        });
    },
    DELETE_PRODUCT : (state, action) => {
        return state.filter((product)=>product.id !== action.id);
    },
    ADD_PRODUCT : (state, action) => {
        console.log(state.concat(action.product))
        return [action.product, ...state];
    }
});