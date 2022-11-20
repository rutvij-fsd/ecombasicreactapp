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
      <h1>Shorting Button</h1>
      <div>
        {products.map((product, index) => (
          <ProductDetails product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductArea;
