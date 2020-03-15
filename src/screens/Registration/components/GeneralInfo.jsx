import React from "react";
import { Formik, Form, Field } from "formik";
import DefaultInput from "../../../components/ReusableComponents/DefaultInput";
import PasswordInput from "../../../components/ReusableComponents/PasswordInput";
import { GeneralInfoSchema } from "../../../config/yupConfig";
import registrationStore from "../RegistrationStore";
import classes from "../Registration.module.css";
import "../pretty-checkbox.min.css";
import ourService from "../../../services/ourService";
export default function GeneralInfo() {
  return (
    <div>
      <h1 className={classes.h1}>Общая информация</h1>
      <div className={classes["form-wrapper"]}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
            role: ""
          }}
          validationSchema={GeneralInfoSchema}
          onSubmit={async (values, { resetForm }) => {
            const answer = await ourService.checkEmail(values.email);
            if (answer === 200) {
              if (values.role === "SITTER")
                registrationStore.changePage(values, "services");
              else registrationStore.changePage(values, "address");
            } else {
              console.log("Email already exists");
            }
          }}
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
              <label
                htmlFor="role"
                style={{ display: "block", textAlign: "left" }}
              >
                Я регистрируюсь как...
              </label>
              <div className="pretty p-default p-round p-thick">
                <Field type="radio" name="role" value="SITTER" />
                <div className="state p-success-o">
                  <label> человек, который сидит с собакой</label>
                </div>
              </div>
              <div className="pretty p-default p-round p-thick">
                <Field type="radio" name="role" value="FINDER" />
                <div className="state p-success-o">
                  <label> человек, который ищет сиделку</label>
                </div>
              </div>
              {errors.role && touched.role && (
                <div className={classes["role-error"]}>{errors.role}</div>
              )}
              <button type="submit" className={classes.btn}>
                Следующий шаг
              </button>
            </Form>
          )}
        />
      </div>
    </div>
  );
}
