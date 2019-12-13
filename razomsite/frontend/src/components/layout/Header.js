import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { withRouter } from "react-router-dom";

import "./mystyle.css";

export class Header extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  redirectToLogin() {
    this.props.history.push("/login");
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <li className="nav-item">
        <button
          onClick={this.props.logout}
          className="nav-link btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li>
    );

    const guestLinks = (
      <Fragment>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </Fragment>
    );

    return (
      <header>
        <div className="header-container">
          <a id="logo_nav" href="">
            <img src="/static/welcomepage/img/razomlogo.svg" alt="" />
          </a>
          <nav id="top_nav">
            <ul>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a
                  onClick={
                    isAuthenticated ? this.props.logout : this.redirectToLogin.bind(this)
                  }
                >
                  <i id="portfolio_icon" className="material-icons">
                    account_circle
                  </i>
                </a>
              </li>
            </ul>
          </nav>
          <div id="top_nav_rectangle"></div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(withRouter(Header));
