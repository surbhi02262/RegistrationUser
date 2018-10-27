import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../Store/User/actionCreator";
import { Redirect } from "react-router-dom";
class UserForm extends Component {
  state = {
    fireRedirect: false,
    user: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      gender: "",
      emailAddress: ""
    }
  };
  handleFormchanges = e => {
    let userState = this.state.user;
    userState[e.target.name] = e.target.value;
    this.setState({ user: userState });
  };
  addUserDetails = () => {
    const { firstName, lastName, phoneNumber, emailAddress } = this.state.user;
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      phoneNumber.length > 0 &&
      emailAddress.length > 0
    ) {
      this.props.addUser(this.state.user);
      this.setState({ fireRedirect: true });
    }
  };
  componentDidMount() {
    if (this.props.isUpdate) {
      this.setState({ user: this.props.editInfo });
    }
  }
  render() {
    const { user, fireRedirect } = this.state;
    const { firstName, lastName, phoneNumber, gender, emailAddress } = user;
    if (fireRedirect) {
      return <Redirect to="/address" />;
    }
    return (
      <div className="container well">
        <div className="col-sm-4 col-sm-offset-4">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              placeholder="Enter First name"
              value={firstName}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              placeholder="Enter Last name"
              value={lastName}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              className="form-control"
              id="gender"
              placeholder="Enter gender"
              value={gender}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Email Address</label>
            <input
              type="text"
              name="emailAddress"
              className="form-control"
              id="emailAddress"
              placeholder="Enter Email Address"
              value={emailAddress}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <button onClick={() => this.addUserDetails()}>Next</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: data => {
      dispatch(addUser(data));
    }
  };
};
const mapStateToProps = state => {
  const { User } = state;
  return {
    isUpdate: User.isUpdate,
    editInfo: User.updateEmp
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
