import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";

const ProductDetailPage = () => {
  const params = useParams();

  const products = useSelector((state) => state.product);
  const index = products.findIndex((object) => {
    return object.id == params.id;
  });
  const product = products[index];

  return (
    <div className="flex flex-col">
      <ProductsDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;
