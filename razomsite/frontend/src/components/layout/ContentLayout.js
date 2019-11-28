import React, { Fragment } from "react";
import Pages from "../pages/Pages";
import Form from "../pages/Form";

export default function ContentLayout() {
  return (
    <Fragment>
      <Pages />
      <Form />
    </Fragment>
  );
}
