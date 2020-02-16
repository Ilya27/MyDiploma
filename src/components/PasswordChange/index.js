import React, { Component } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import PasswordInput from "../ReusableComponents/PasswordInput";
import { ChangeSchema } from "../../config/yupConfig";
import classes from "./PasswordChange.module.css";

class PasswordChange extends Component {
  render() {
    return (
      <div className={classes["change-form-wrapper"]}>
        <Formik
          initialValues={{
            passwordOne: "",
            passwordTwo: "",
            newPassword: ""
          }}
          validationSchema={ChangeSchema}
          render={({ errors, touched }) => (
            <Form>
              <h1 className={classes.h1}>Change Password</h1>
              <PasswordInput
                id="changePasswordOne"
                label="Password"
                name="passwordOne"
                errors={errors}
                touched={touched}
              />

              <PasswordInput
                id="changePasswordTwo"
                label="Repeat password"
                name="passwordTwo"
                errors={errors}
                touched={touched}
              />

              <PasswordInput
                id="newPassword"
                label="New password"
                name="newPassword"
                errors={errors}
                touched={touched}
              />

              <button type="submit" className={classes.btn}>
                Change Password
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default PasswordChange;
