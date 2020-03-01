import React from "react";
import { Formik, Form } from "formik";
import { PaymentInfoSchema } from "../../../config/yupConfig";
import DefaultInput from "../../../components/ReusableComponents/DefaultInput";
import registrationStore from "../RegistrationStore";
import classes from "../Registration.module.css";
export default function PaymentInfo() {
  return (
    <div>
      <h1 className={classes.h1}>Платежная информация</h1>
      <div className={classes["form-wrapper"]}>
        <Formik
          initialValues={{
            number: "",
            month: "",
            cvc: "",
            year: ""
          }}
          validationSchema={PaymentInfoSchema}
          onSubmit={(values, { resetForm }) => {
            registrationStore.registration(values);
          }}
          render={({ errors, touched }) => (
            <Form>
              <DefaultInput
                label="Номер карты"
                name="number"
                type="text"
                errors={errors}
                touched={touched}
              />
              <label>Срок действия</label>
              <DefaultInput
                label=""
                name="month"
                type="text"
                errors={errors}
                touched={touched}
              />
              <DefaultInput
                label=""
                name="year"
                type="text"
                errors={errors}
                touched={touched}
              />
              <DefaultInput
                label="СVV"
                name="cvc"
                type="text"
                errors={errors}
                touched={touched}
              />
              <button type="submit" className={classes.btn}>
                Завершить регистрацию
              </button>
            </Form>
          )}
        />
      </div>
    </div>
  );
}
