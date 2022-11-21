import uuid from "react-uuid";


export function fetchProduct() {
  return (dispatch) => {
    fetch("https://my-json-server.typicode.com/rutvij-fsd/jsonServer/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchProductAction(data));
      });
  };
}

export function fetchProductAction(product) {
  return {
    type: "FETCH_PRODUCT",
    product,
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
        
        dispatch(updateProductSuccess(json))});
  };
}

export function updateProductSuccess(product) {
  return {
    type: "UPDATE_PRODUCT_SUCCESS",
    product,
  };
}

export function deleteProduct(id) {
  return {
    type: "DELETE_PRODUCT",
    id
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
        
        dispatch(addProductSuccess(json))});
  };
}

export function addProductSuccess(product){
  return {
    type: "ADD_PRODUCT",
    product
  };
}