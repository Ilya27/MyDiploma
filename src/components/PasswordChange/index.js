import React, { Component } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import PasswordInput from "../ReusableComponents/PasswordInput";
import { ChangeSchema } from "../../config/yupConfig";
import classes from "./PasswordChange.module.css";
import accountStore from "../../screens/Account/AccountStore";

class PasswordChange extends Component {
  render() {
    return (
      <div className={classes["change-form-wrapper"]}>
        <Formik
          initialValues={{
            passwordOne: "",
            newPasswordTwo: "",
            newPassword: ""
          }}
          validationSchema={ChangeSchema}
          onSubmit={values => {
            // accountStore.updateInfo(values);
            console.log(values);
            accountStore.changePassword({
              password: values.passwordOne,
              oldPassword: values.newPassword
            });
            toast.success("Вы успешно изменили пароль!");
          }}
          render={({ errors, touched }) => (
            <Form>
              <h1 className={classes.h1}>Изменить пароль</h1>
              <PasswordInput
                id="changePasswordOne"
                label="Пароль"
                name="passwordOne"
                errors={errors}
                touched={touched}
              />

              <PasswordInput
                id="newPassword"
                label="Новый пароль"
                name="newPassword"
                errors={errors}
                touched={touched}
              />

              <PasswordInput
                id="changePasswordTwo"
                label="Повторите новый пароль"
                name="newPasswordTwo"
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
