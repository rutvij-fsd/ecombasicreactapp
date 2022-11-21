import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Action/product";

import { ProductDetails } from "./ProductDetails";

const ProductArea = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="bg-slate-100">
      <button className="px-4 py-1 my-2 text-lg text-white duration-150 bg-[#6366f1] rounded-md hover:bg-indigo-700 active:shadow-lg">
        <span className="flex flex-row ">
          
          <h1 className="mx-2">Sort</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 py-1"
          >
            <path
              fillRule="evenodd"
              d="M6.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06L8.25 4.81V16.5a.75.75 0 01-1.5 0V4.81L3.53 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zm9.53 4.28a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V7.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div>
        {products.map((product, index) => (
          <ProductDetails product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductArea;
