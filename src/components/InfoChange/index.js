import React, { Component } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { InfoChangeSchema } from "../../config/yupConfig";
import data from "../constants/data";
import Checkbox from "../ReusableComponents/Checkbox";
import DefaultInput from "../ReusableComponents/DefaultInput";
import classes from "./InfoChange.module.css";

class InfoChange extends Component {
  render() {
    let services = data.dog.map(item => (
      <Checkbox
        name="checkboxes"
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
        box={classes.box}
        key={item.dogSize}
      />
    ));
    let daysOfTheWeek = data.daysOfTheWeek.map(item => (
      <Checkbox
        name="daysOfTheWeek"
        value={item.value}
        box={classes.day}
        key={item.day}
      />
    ));
    return (
      <div className={classes["info-change-form-wrapper"]}>
        <h1 className={classes.h1}>Set account info</h1>
        <Formik
          initialValues={{}}
          validationSchema={InfoChangeSchema}
          onSubmit={values => {
            toast.success("You changed your profile info successfully!");
          }}
          render={({ errors, touched }) => (
            <Form>
              <DefaultInput
                id="walkerCityChange"
                label="City"
                name="city"
                type="text"
                errors={errors}
                touched={touched}
              />

              <DefaultInput
                id="walkerAddressChange"
                label="Address"
                name="address"
                type="text"
                errors={errors}
                touched={touched}
              />

              <DefaultInput
                id="walkerSalaryChange"
                label="Salary"
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

              <div className={classes["input-wrapper"]}>
                <label className={classes.label}>Work days</label>
                <div className={classes["checkboxes-wrapper"]}>
                  {daysOfTheWeek}
                </div>
                {errors.daysOfTheWeek && touched.daysOfTheWeek && (
                  <div className={classes.error}>{errors.daysOfTheWeek}</div>
                )}
              </div>

              <button type="submit" className={classes.btn}>
                Save info
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default InfoChange;
