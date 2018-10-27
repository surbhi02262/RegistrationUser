import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserInfo, editUserInfo } from "../../Store/User/actionCreator";

class ShowUserDetails extends Component {
  onDelete = userInformation => {
    this.props.deleteUserInfo(userInformation);
  };
  onEdit = userInformation => {
    this.props.editUserInfo(userInformation);
  };

  render() {
    const { userInformation } = this.props;
    console.log("user is ", userInformation);
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <table className="table table-hover">
          <thead>
            User Personal Information is :
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>phoneNumber</th>
              <th>gender</th>
              <th>emailAddress</th>
              <th>Company Name</th>
              <th>Salary</th>
              <th>Employee Id</th>
              <th>Work experience</th>
              <th>Skill</th>
              {userInformation.address.map((item, index) => {
                let key = Object.keys(item);
                return key.map(keyItem => <th>{keyItem}</th>);
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userInformation.id}</td>
              <td>{userInformation.info.firstName}</td>
              <td>{userInformation.info.lastName}</td>
              <td>{userInformation.info.phoneNumber}</td>
              <td>{userInformation.info.gender}</td>
              <td>{userInformation.info.emailAddress}</td>
              <td>{userInformation.professinalInfo.companyName}</td>
              <td>{userInformation.professinalInfo.salary}</td>
              <td>{userInformation.professinalInfo.employeeId}</td>
              <td>{userInformation.professinalInfo.workExp}</td>
              <td>{userInformation.professinalInfo.skill}</td>

              {userInformation.address.map((item, index) => {
                let key = Object.keys(item);
                return key.map(keyItem => <td>{item[keyItem]}</td>);
              })}
            </tr>
            <button onClick={() => this.onDelete(userInformation)}>
              Delete
            </button>
            <button onClick={() => this.onEdit(userInformation)}>Edit</button>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { User } = state;
  return {
    userInformation: User.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserInfo: data => {
      dispatch(deleteUserInfo(data));
    },
    editUserInfo: data => {
      dispatch(editUserInfo(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowUserDetails);
