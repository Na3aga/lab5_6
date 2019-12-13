import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPages, deletePage, addPage } from "../../actions/pages";

export class Pages extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getPages();
  }

  render() {
    return (
      <ul>
        {this.props.pages.map((page, i) => (
          <li key={i}>
            <h2>{"id " + page.id}</h2>
            <h3>{page.header}</h3>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.props.deletePage.bind(this, page.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages
});

export default connect(mapStateToProps, { getPages, deletePage })(Pages);
