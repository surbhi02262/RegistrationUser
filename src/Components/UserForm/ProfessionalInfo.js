import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addProfessionalDetails } from "../../Store/User/actionCreator";

class professionalInfo extends Component {
  state = {
    fireRedirect: false,
    professionalDetails: {
      companyName: "",
      salary: "",
      employeeId: "",
      workExp: "",
      skill: ""
    }
  };
  componentDidMount() {
    if (this.props.isUpdate) {
      this.setState({ professionalDetails: this.props.editInfo });
    }
  }
  handleFormchanges = e => {
    let professionalDetailsState = this.state.professionalDetails;
    professionalDetailsState[e.target.name] = e.target.value;
    this.setState({ professionalDetails: professionalDetailsState });
  };
  addProfessionalDetails = () => {
    const {
      companyName,
      salary,
      employeeId,
      workExp,
      skill
    } = this.state.professionalDetails;
    if (
      companyName.length > 0 &&
      salary.length > 0 &&
      employeeId.length > 0 &&
      workExp.length > 0 &&
      skill.length > 0
    ) {
      this.props.addProfessionalDetails(this.state.professionalDetails);
      this.setState({ fireRedirect: true });
    }
  };
  render() {
    const { professionalDetails, fireRedirect } = this.state;
    const {
      companyName,
      salary,
      employeeId,
      workExp,
      skill
    } = professionalDetails;
    if (fireRedirect) {
      return <Redirect to="/ShowUserDetails" />;
    }
    return (
      <div className="container well">
        <div className="col-sm-4 col-sm-offset-4">
          <div className="form-group">
            <label htmlFor="companyName">companyName</label>
            <input
              type="text"
              name="companyName"
              className="form-control"
              id="companyName"
              placeholder="Enter companyName"
              value={companyName}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">salary</label>
            <input
              type="text"
              name="salary"
              className="form-control"
              id="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="employeeId">employeeId</label>
            <input
              type="text"
              name="employeeId"
              className="form-control"
              id="employeeId"
              placeholder="Enter employeeId"
              value={employeeId}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="workExp">workExp</label>
            <input
              type="text"
              name="workExp"
              className="form-control"
              id="workExp"
              placeholder="Enter workExp"
              value={workExp}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="skill">skill</label>
            <input
              type="text"
              name="skill"
              className="form-control"
              id="skill"
              placeholder="Enter skill"
              value={skill}
              onChange={e => this.handleFormchanges(e)}
            />
          </div>
          <button onClick={() => this.addProfessionalDetails()}>Next</button>
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
    addProfessionalDetails: data => {
      dispatch(addProfessionalDetails(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(professionalInfo);
