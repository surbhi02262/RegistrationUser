import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser
} from "../../Store/AddUser/actionCreator";

class Form extends Component {
  state = {
    update: false,
    user: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: ""
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormchanges = e => {
    let updateUser = this.state.user;
    updateUser[e.target.name] = e.target.value;
    this.setState({ user: updateUser });
  };
  onSubmit = () => {
    const { firstName, lastName } = this.state.user;
    if (firstName.length > 0 && lastName.length > 0) {
      let newUser = this.state.user;
      this.props.addUser(newUser);
      this.setState({
        user: {
          firstName: "",
          lastName: "",
          address: "",
          phoneNumber: ""
        }
      });
    }
  };
  onUserUpdate = () => {
    const { firstName, lastName } = this.state.user;
    if (firstName.length > 0 && lastName.length > 0) {
      let newUser = this.state.user;
      this.props.updateUser(newUser);
      this.setState({
        user: {
          firstName: "",
          lastName: "",
          address: "",
          phoneNumber: ""
        }
      });
    }
  };
  onDelete = id => {
    this.props.deleteUser(id);
  };

  onUpdate = updateUser => {
    this.setState({
      user: JSON.parse(JSON.stringify(updateUser)),
      update: true
    });
  };

  render() {
    const { update, user } = this.state;
    const { firstName, lastName, address, phoneNumber } = user;
    const { users } = this.props;
    return (
      <div>
        <div className="col-sm-6 col-sm-offset-3">
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
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Enter Last name"
              value={lastName}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone number</label>
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
          {!update && (
            <button
              type="submit"
              className="btn btn-default"
              onClick={() => this.onSubmit()}
            >
              ADD USER
            </button>
          )}
          {update && (
            <button
              type="submit"
              className="btn btn-default"
              onClick={() => this.onUserUpdate()}
            >
              Update USER
            </button>
          )}
        </div>

        <div className="well">
          {users.map((user, index) => (
            <div key={"user-" + index} className="well col-sm-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter First name"
                  value={user.firstName}
                  onChange={e => this.handleFormchanges(e)}
                />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Last name"
                  value={user.lastName}
                  onChange={e => this.handleFormchanges(e)}
                />
              </div>
              <div>{user.address}</div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  value={user.phoneNumber}
                  onChange={e => this.handleFormchanges(e)}
                />
              </div>
              <button onClick={() => this.onDelete(user.id)}>Delete</button>
              <button onClick={() => this.onUpdate(user)}>Update</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: data => {
      dispatch(addUser(data));
    },
    deleteUser: data => {
      dispatch(deleteUser(data));
    },
    updateUser: data => {
      dispatch(updateUser(data));
    }
  };
};

const mapStateToProps = state => {
  const { ADD } = state;
  return {
    users: ADD.users
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
