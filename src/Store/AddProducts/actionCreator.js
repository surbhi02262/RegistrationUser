// export const addProduct = data => ({
//   type: "ADD_PRODUCT",
//   data
// });

export const addProduct = data => {
  return (dispatch, getState) => {
    let addProducts = getState();
    if (addProducts.AddProducts.Products.length > 0) {
      let products = addProducts.AddProducts.Products;
      let found = products.filter(
        product => product.productName === data.productName
      );
      if (found.length > 0) {
        dispatch({
          type: "ADD_PRODUCT_ERROR_MESSAGE",
          error: "This brand is already existing"
        });
      } else {
        dispatch({ type: "ADD_PRODUCT", data });
      }
    } else {
      dispatch({ type: "ADD_PRODUCT", data });
    }
    console.log("add product is ", addProducts);
  };
};
export const deleteProduct = data => ({
  type: "DELETE_PRODUCT",
  data
});

export const addProductToCheckout = data => ({
  type: "ADD_PRODUCT_TO_CHECKOUT",
  data
});
