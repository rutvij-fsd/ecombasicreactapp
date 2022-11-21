import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Action/product";
import ProductArea from "./ProductArea";

const AddProduct = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const dispatch = useDispatch();

  const onSaveProductHandler = () => {
    const title = inputTitle;
    const price = inputPrice;
    const description = inputDescription;
    const image = inputImage;
    const category = inputCategory;
    dispatch(addProduct({title, price, description, image, category}));
  };

  return (
    <div className="flex flex-col text-center bg-white mx-10 my-2 p-2 container border border-gray-200 w-1/2">
      <label
        for="title"
        className="block py-2 text-gray-900 font-bold text-xl"
      >
        Title
      </label>
      <div className="flex items-center text-gray-400 border rounded-md">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </div>
      <label
        for="Product Price"
        className="block py-2 text-gray-900 font-bold text-xl"
      >
        Product Price
      </label>
      <div className="flex items-center w-1/2 text-gray-400 border rounded-md">
        <input
          type="number"
          placeholder="Price In ₹"
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
      </div>
      <label
        for="Image"
        className="block py-2 text-gray-900 font-bold text-xl"
      >
        Image Url
      </label>
      <div className="flex items-center text-gray-400 border rounded-md">
        <input
          type="text"
          placeholder="Image Url"
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
          value={inputImage}
          onChange={(e) => setInputImage(e.target.value)}
        />
      </div>
      <label
        for="category"
        className="block py-2 text-gray-900 font-bold text-xl"
      >
        Category
      </label>
      <div className="flex items-center text-gray-400 border rounded-md">
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2.5 ml-2 bg-transparent outline-none"
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        />
      </div>
      <label
        for="Description"
        className="block py-2 text-gray-900 font-bold text-xl"
      >
        Product Description
      </label>
      <div className="flex items-center text-gray-400 border rounded-md">
        <textarea
          name="description"
          id=""
          placeholder="Product description..."
          className="w-full p-2.5 m-0 bg-transparent text-gray-400"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
      </div>
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
      <ProductArea />
    </div>
  );
};

export default AddProduct;
