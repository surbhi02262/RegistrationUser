const initialState = {
  Products: [
    { productName: "Caphichino", productPrice: 770 },
    { productName: "saurav", productPrice: 990 }
  ],
  error: "",
  checkOut: [{ productName: "saurav", productPrice: 990 }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let newProduct = state.Products;
      newProduct.push(action.data);
      return {
        ...state,
        Products: newProduct,
        error: ""
      };
    }
    case "ADD_PRODUCT_ERROR_MESSAGE": {
      return {
        ...state,
        error: action.error
      };
    }
    case "ADD_PRODUCT_TO_CHECKOUT": {
      let newCheckout = state.checkOut;
      newCheckout.push(action.data);
      return {
        ...state,
        checkOut: newCheckout
      };
    }
    case "DELETE_PRODUCT": {
      let products = state.Products;
      let newProductList = products.filter(
        (product, index) => product.productName !== action.data.productName
      );
      return {
        ...state,
        Products: newProductList
      };
    }
    default: {
      return state;
    }
  }
};
