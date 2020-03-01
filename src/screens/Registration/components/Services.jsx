import React from "react";
import { Formik, Form } from "formik";
import { PaymentInfoSchema } from "../../../config/yupConfig";
import DefaultInput from "../../../components/ReusableComponents/DefaultInput";
import registrationStore from "../RegistrationStore";
import Checkbox from "../../../components/ReusableComponents/Checkbox";
import data from "../../../components/constants/data";
import classes from "../Registration.module.css";

export default function Services() {
  let services = data.dog.map(item => (
    <Checkbox
      name="services"
      value={item.text}
      icon={item.icon}
      box={classes.box}
      key={item.text}
    />
  ));
  let dogSizes = data.weights.map(item => (
    <Checkbox
      name="dogSizes"
      value={item.dogSize}
      text={item.weight}
      box={classes["box-dog"]}
      key={item.dogSize}
    />
  ));
  return (
    <div>
      <h1 className={classes.h1}>Услуги</h1>
      <div className={classes["form-wrapper"]}>
        <Formik
          initialValues={{
            salary: 10,
            services: [],
            dogSizes: []
          }}
          onSubmit={(values, { resetForm }) => {
            registrationStore.changePage(values, "address");
          }}
          render={({ errors, touched }) => (
            <Form>
              <DefaultInput
                label="Оклад"
                name="salary"
                type="number"
                errors={errors}
                touched={touched}
              />

              <div className={classes["input-wrapper"]}>
                <label className={classes.label}>Services</label>
                <div className={classes["checkboxes-wrapper"]}>{services}</div>
                {errors.checkboxes && touched.checkboxes && (
                  <div className={classes.error}>{errors.checkboxes}</div>
                )}
              </div>

              <div className={classes["input-wrapper"]}>
                <label className={classes.label}>Dog sizes</label>
                <div className={classes["checkboxes-wrapper"]}>{dogSizes}</div>
                {errors.dogSizes && touched.dogSizes && (
                  <div className={classes.error}>{errors.dogSizes}</div>
                )}
              </div>
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
