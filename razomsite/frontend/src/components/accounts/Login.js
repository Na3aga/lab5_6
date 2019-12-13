import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import "./formstyle.css";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;

    return (
      <div className="form-container">
        <div className="form-card ">
          <h2 className="text-center monserat">Login</h2>
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
              <label className="monserat m10">Password</label>
              <input
                type="password"
                className="form-input text-center m10"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="text-center">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
            <p className="monserat">
              Don't have an account? <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
