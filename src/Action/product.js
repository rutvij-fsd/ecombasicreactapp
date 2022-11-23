import uuid from "react-uuid";
import { ADD_PRODUCT, FETCH_PRODUCT, UPDATE_PRODUCT_SUCCESS } from "../Reducer/productsSlice";
import { success } from "../utils/notificationUtils";


export function fetchProduct() {
  return (dispatch) => {
    fetch("https://my-json-server.typicode.com/rutvij-fsd/jsonServer/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(FETCH_PRODUCT(data));
      });
  };
}



export function updateProduct({title, price, description, image, category, id}) {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/rutvij-fsd/jsonServer/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title,
        price,
        description,
        image,
        category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        success('Product updated successfully!')
        dispatch(UPDATE_PRODUCT_SUCCESS(json))});
  };
}





export function addProduct({title, price, description, image, category}) {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/rutvij-fsd/jsonServer/products`, {
      method: "POST",
      body: JSON.stringify({
        id: uuid().split("-")[0],
        title,
        price,
        description,
        image,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        success("Product created successfully!")
        dispatch(ADD_PRODUCT(json))});
  };
}

