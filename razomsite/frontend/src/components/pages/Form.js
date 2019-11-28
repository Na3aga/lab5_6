import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPage } from "../../actions/pages";

export class Form extends Component {
  state = {
    message: ""
  };

  static propTypes = {
    addPage: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const message = this.state.message;
    const page = { header: message };
    this.props.addPage(page);
    this.setState({ message: "" });
  };

  render() {
    const message = this.state.message;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Enter a message</label>
          <input
            type="text"
            name="message"
            onChange={this.onChange}
            value={message}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { addPage })(Form);
