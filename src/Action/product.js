export function fetchProduct(){
    return (dispatch) => {
        fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data)=>{
        dispatch(updateProduct(data))
      })
    }
}

export function updateProduct(product){
    return{
        type: "UPDATE_PRODUCT",
        product,
    }
}