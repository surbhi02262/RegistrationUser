import React, { Component } from "react";
import Form from "../Components/Form/Form";
import { Switch, Route } from "react-router-dom";
import UserForm from "../Components/UserForm/UserForm";
import Address from "../Components/UserForm/Address";
import ProfessionalDeatils from "../Components/UserForm/ProfessionalInfo";
import ShowUserDetails from "../Components/UserForm/ShowUserDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Form} /> */}
          <Route exact path="/" component={UserForm} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/ShowUserDetails" component={ShowUserDetails} />
          <Route
            exact
            path="/professionalInfo"
            component={ProfessionalDeatils}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
