import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

import "./formstyle.css";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords Do Not Match" });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, email, password, password2 } = this.state;

    return (
      <div className="form-container">
        <div className="form-card">
          <h2 className="text-center monserat">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-div">
              <label className="monserat m10">Username</label>
              <input
                type="text"
                className="form-input text-center m10"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-div">
              <label className="monserat m10">Email</label>
              <input
                type="email"
                className="form-input text-center m10"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-div">
              <label className="monserat m10">Password</label>
              <input
                type="password"
                className="form-input text-center m10"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-div">
              <label className="monserat m10">Confirm Password</label>
              <input
                type="password"
                className="form-input text-center m10"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p className="monserat">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
