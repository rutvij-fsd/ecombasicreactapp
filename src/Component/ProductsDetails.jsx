import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  updateProduct } from "../Action/product";
import { DELETE_PRODUCT } from "../Reducer/productsSlice";

export const ProductsDetails = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [isEditing, setIsEditing] = useState({
    edit: false,
  });

  const dispatch = useDispatch();

  const onEditHandler = (product) => {
    setIsEditing({ ...isEditing, edit: true });
    setInputTitle(product.title);
    setInputPrice(Math.round(product.price));
    setInputDescription(product.description);
  };
  const products = useSelector((state) => state.product);

  const onSaveProductHandler = () => {
    const title = inputTitle;
    const price = inputPrice;
    const description = inputDescription;
    const image = product.image;
    const category = product.category;
    const id = product.id;
    setIsEditing({ ...isEditing, edit: false });
    dispatch(updateProduct({ title, price, description, image, category, id }));
    console.log(products);
  };

  const product = props.product;
  return (
    <div className="flex flex-row text-center bg-white mx-10 my-10">
      {/* left side of product list  */}
      <div className="basis-1/2 flex flex-row">
        <Link to={"/product/" + product.id}>
          <img
            className="w-32 h-32 mx-5 my-5 basis-1/3"
            src={product.image}
            alt={"product"}
          />
        </Link>

        {isEditing.edit ? (
          <div className="mx-3 my-3 text-xl text-start basis-2/3">
            <div className="flex items-center text-gray-400 border rounded-md">
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center w-1/2 text-gray-400 border rounded-md">
              <input
                type="number"
                placeholder="Price In ₹"
                className="w-full p-2.5 ml-2 bg-transparent outline-none"
                value={inputPrice}
                onChange={(e) => setInputPrice(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="mx-3 my-3 text-xl text-start basis-2/3">
            {product.title}
            <div className="font-bold">₹ : {Math.round(product.price)}</div>
          </div>
        )}
      </div>
      {/* Right side of product list  */}
      <div className="basis-1/2 grid grid-row">
        <div className="font-bold row-span-1">Description</div>

        {isEditing.edit ? (
          <div className="mx-3 text-xs text-justify row-span-5">
            <textarea
              name="description"
              id=""
              className="w-full p-2.5 ml-2 bg-transparent text-gray-400 border rounded-md"
              value={inputDescription}
              onChange={(e) => setInputDescription(e.target.value)}
            />
          </div>
        ) : (
          <div className="mx-3 text-xs text-justify row-span-5">
            {product.description}
          </div>
        )}
        {isEditing.edit ? (
          <div className="mx-5 row-span-1 flex justify-end">
            <button
              className="px-4 py-1 my-2 text-lg text-white duration-150 bg-[#6366f1] rounded-md hover:bg-indigo-700 active:shadow-lg"
              onClick={() => {
                onSaveProductHandler();
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="mx-5 row-span-1 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mx-1 hover:cursor-pointer"
              onClick={() => onEditHandler(product)}
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:cursor-pointer"
              onClick={() => dispatch(DELETE_PRODUCT(product.id))}
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDetails;
