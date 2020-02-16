import React, { Component } from "react";
import { Formik, Form } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SignInFacebook.module.css";

class SignInFacebook extends Component {
  render() {
    return (
      <Formik
        onSubmit={() => {}}
        render={() => (
          <Form>
            <button type="submit" className={classes.btn}>
              <FontAwesomeIcon icon={["fab", "facebook"]} /> Sign in with
              Facebook
            </button>
          </Form>
        )}
      />
    );
  }
}

export default SignInFacebook;
