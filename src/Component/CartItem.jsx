import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../Reducer/cartSlice";

const CartItem = ({ title, price, category, amount, image, id }) => {
    const dispatch = useDispatch();
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-red-500 text-xs">{category}</span>
          <span
            onClick={()=> dispatch(remove(id))}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={()=> dispatch(decrease(id))}>
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <div className="mx-2 border text-center w-8 cursor-not-allowed">{amount}</div>

        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={()=> dispatch(increase(id))}>
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">₹{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">₹{price*amount}</span>
    </div>
  );
};

export default CartItem;
