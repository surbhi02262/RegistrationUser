import React, { Component } from "react";
import { connect } from "react-redux";

class Payment extends Component {
  render() {
    const { checkOut } = this.props;

    return (
      <div>
        <h1>CheckOut</h1>
        <div>
          {checkOut.length > 0 &&
            checkOut.map((checkoutitems, index) => (
              <div key={index}>
                <div>{index}</div>
                <div>{checkoutitems.productName}</div>
                <div>{checkoutitems.productPrice}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { AddProducts } = state;
  return {
    checkOut: AddProducts.checkOut
  };
};
export default connect(
  mapStateToProps,
  null
)(Payment);
