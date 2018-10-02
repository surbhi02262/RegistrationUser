import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navbar nav-container">
      <div className="container-fluid">
        <div className="navbar-header head">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand brandname" href="/">
            Coffee Shop
          </a>
        </div>
        <div className="navbar-right btn">
          <Link to="/addproducts">Add Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
