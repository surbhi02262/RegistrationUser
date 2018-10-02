import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addProduct } from "../../Store/AddProducts/actionCreator";
class AddProducts extends Component {
  state = {
    productName: "",
    productPrice: "",
    redirect: false
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    if (
      this.state.productName.length > 0 &&
      this.state.productPrice.length > 0
    ) {
      let newProduct = this.state;
      this.props.addProduct(newProduct);
      this.setState({ redirect: true });
    }
  };
  render() {
    const { redirect } = this.state;
    const { err } = this.props;
    if (redirect && err.length === 0) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {err.length > 0 && <div class="alert alert-danger">{err}</div>}
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            value={this.state.productName}
            onChange={e => this.onChange(e)}
            placeholder="Add Product Name"
          />
        </div>
        <div className="form-group">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            name="productPrice"
            value={this.state.productPrice}
            onChange={e => this.onChange(e)}
            placeholder="Enter Product Price"
          />
        </div>
        <button
          type="submit"
          className="btn btn-default"
          onClick={e => this.onSubmit(e)}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: data => {
      dispatch(addProduct(data));
    }
  };
};

const mapStateToProps = state => {
  const { AddProducts } = state;
  return {
    err: AddProducts.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProducts);
