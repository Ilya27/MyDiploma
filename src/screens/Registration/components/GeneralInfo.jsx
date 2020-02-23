import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import classes from "../Registration.module.css";
import DefaultInput from "../../../components/ReusableComponents/DefaultInput";
import PasswordInput from "../../../components/ReusableComponents/PasswordInput";
import { RegistrationSchema } from "../../../config/yupConfig";
import registrationStore from "../RegistrationStore";
export default function GeneralInfo() {
  return (
    <div>
      <h1 className={classes.h1}>Общая информация</h1>
      <div className={classes["form-wrapper"]}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            city: "",
            salary: 10,
            checkboxes: [],
            dogSizes: [],
            email: "",
            password: "",
            repeatPassword: ""
          }}
          validationSchema={RegistrationSchema}
          onSubmit={(values, { resetForm }) => {}}
          render={({ errors, touched }) => (
            <Form>
              <DefaultInput
                label="Имя"
                name="firstName"
                type="text"
                errors={errors}
                touched={touched}
              />
              <DefaultInput
                label="Фамилия"
                name="lastName"
                type="text"
                errors={errors}
                touched={touched}
              />
              <DefaultInput
                label="Email"
                name="email"
                type="email"
                errors={errors}
                touched={touched}
              />
              <PasswordInput
                label="Пароль"
                name="password"
                errors={errors}
                touched={touched}
              />
              <PasswordInput
                label="Подтвердите пароль"
                name="repeatPassword"
                errors={errors}
                touched={touched}
              />
            </Form>
          )}
        />
        <button onClick={()=>registrationStore.changePage('1111')}></button>
      </div>
    </div>
  );
}
