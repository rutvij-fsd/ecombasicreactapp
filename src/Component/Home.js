import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Action/product";

const ProductArea = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <h1>Shorting Button</h1>
    </div>
  );
};

export default ProductArea;
