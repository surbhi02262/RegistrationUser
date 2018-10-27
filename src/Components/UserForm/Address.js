import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addAdddressDetails } from "../../Store/User/actionCreator";

class Address extends Component {
  state = {
    fireRedirect: false,
    address: {
      buildingNo: "",
      area: "",
      locality: "",
      city: "",
      state: "",
      country: ""
    }
  };
  componentDidMount() {
    if (this.props.isUpdate) {
      this.setState({ address: this.props.editInfo });
    }
  }
  handleFormchanges = e => {
    let addressState = this.state.address;
    addressState[e.target.name] = e.target.value;
    this.setState({ address: addressState });
  };
  addAdddressDetails = () => {
    const {
      locality,
      buildingNo,
      area,
      city,
      state,
      country
    } = this.state.address;
    if (
      locality.length > 0 &&
      buildingNo.length > 0 &&
      area.length > 0 &&
      city.length > 0 &&
      state.length > 0 &&
      country.length > 0
    ) {
      this.props.addAdddressDetails(this.state.address);
      this.setState({ fireRedirect: true });
    }
  };
  render() {
    const { address, fireRedirect } = this.state;
    const { buildingNo, area, locality, city, state, country } = address;
    if (fireRedirect) {
      return <Redirect to="/professionalInfo" />;
    }
    return (
      <div className="container well">
        <div className="col-sm-4 col-sm-offset-4">
          <div className="form-group">
            <label htmlFor="buildingNo"> Building No</label>
            <input
              type="text"
              name="buildingNo"
              className="form-control"
              id="buildingNo"
              placeholder="Enter Building No"
              value={buildingNo}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              name="area"
              className="form-control"
              id="area"
              placeholder="Enter Area"
              value={area}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              name="locality"
              className="form-control"
              id="locality"
              placeholder="Enter locality"
              value={locality}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">city</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              placeholder="Enter city"
              value={city}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">state</label>
            <input
              type="text"
              name="state"
              className="form-control"
              id="state"
              placeholder="Enter state"
              value={state}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              id="country"
              placeholder="Enter country"
              value={country}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <button onClick={() => this.addAdddressDetails()}>Next</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { User } = state;
  return {
    isUpdate: User.isUpdate,
    editInfo: User.updateEmp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAdddressDetails: data => {
      dispatch(addAdddressDetails(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
