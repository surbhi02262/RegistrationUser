import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteProduct,
  addProductToCheckout
} from "../../Store/AddProducts/actionCreator";
import Payment from "../../Components/Payment/Payment";

class DisplayProducts extends Component {
  onClick = product => {
    this.props.deleteProduct(product);
  };
  addToCheckout = product => {
    this.props.addProductToCheckout(product);
  };
  render() {
    console.log(JSON.stringify(this.props.DisplayProduct));
    const { DisplayProduct } = this.props;
    return (
      <div className="col-sm-12">
        <div className="col-sm-8">
          <h1>Product List</h1>
          {DisplayProduct.map((product, index) => (
            <div key={index} className="product-info">
              <h3>Product Name : {product.productName}</h3>
              <h3>Product Price : {product.productPrice}</h3>
              <button
                type="button"
                className="btn btn-default delete-btn"
                onClick={() => this.onClick(product)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-default cart-btn"
                onClick={() => this.addToCheckout(product)}
              >
                Add To cart
              </button>
            </div>
          ))}
        </div>
        <div className="col-sm-4">
          <Payment />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { AddProducts } = state;
  return {
    DisplayProduct: AddProducts.Products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: data => {
      dispatch(deleteProduct(data));
    },
    addProductToCheckout: data => {
      dispatch(addProductToCheckout(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProducts);
