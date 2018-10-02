import React, { Component } from "react";
import Header from "./Header/Header";
import { Route, Switch } from "react-router-dom";
import AddProducts from "./AddProducts/AddProducts";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/addproducts" component={AddProducts} />
          <Route exact path="/" component={DisplayProducts} />
        </Switch>
      </div>
    );
  }
}

export default App;
