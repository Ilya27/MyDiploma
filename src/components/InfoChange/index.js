import React, { Component, Fragment } from "react";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import {
  InfoChangeSchemaSitter,
  InfoChangeSchemaFinder
} from "../../config/yupConfig";
import data from "../constants/data";
import Checkbox from "../ReusableComponents/Checkbox";
import DefaultInput from "../ReusableComponents/DefaultInput";
import classes from "./InfoChange.module.css";
import accountStore from "../../screens/Account/AccountStore";

class InfoChange extends Component {
  render() {
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
        // text={item.text}
      />
    ));
    const { user } = this.props;
    const { role } = user;

    let initialValues;
    if (user.role === "SITTER") {
      initialValues = {
        city: user.address.city,
        location: user.address.location,
        services: user.additional.services,
        dogSizes: user.additional.dogSize,
        salary: user.additional.salary,
        daysOfTheWeek: user.additional.workDays || []
      };
    } else {
      initialValues = {
        city: user.address.city,
        location: user.address.location
      };
    }

    return (
      <Fragment>
        {user && (
          <div className={classes["info-change-form-wrapper"]}>
            <h1 className={classes.h1}>Информация об учетной записи</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={
                user.role === "SITTER"
                  ? InfoChangeSchemaSitter
                  : InfoChangeSchemaFinder
              }
              onSubmit={values => {
                accountStore.updateInfo(values);
                toast.success("Вы успешно изменили информацию своего профиля!");
              }}
              render={({ errors, touched }) => (
                <Form>
                  <DefaultInput
                    id="walkerCityChange"
                    label="Город"
                    name="city"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />

                  <DefaultInput
                    id="walkerAddressChange"
                    label="Адрес"
                    name="location"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                  {role === "SITTER" && (
                    <>
                      <DefaultInput
                        id="walkerSalaryChange"
                        label="Оклад"
                        name="salary"
                        type="number"
                        errors={errors}
                        touched={touched}
                      />
                      <div className={classes["input-wrapper"]}>
                        <label className={classes.label}>Услуги</label>
                        <div className={classes["checkboxes-wrapper"]}>
                          {services}
                        </div>
                        {errors.services && touched.services && (
                          <div className={classes.error}>{errors.services}</div>
                        )}
                      </div>
                      <div className={classes["input-wrapper"]}>
                        <label className={classes.label}>Размеры собаки</label>
                        <div className={classes["checkboxes-wrapper"]}>
                          {dogSizes}
                        </div>
                        {errors.dogSizes && touched.dogSizes && (
                          <div className={classes.error}>{errors.dogSizes}</div>
                        )}
                      </div>
                      <div className={classes["input-wrapper"]}>
                        <label className={classes.label}>Рабочие дни</label>
                        <div className={classes["checkboxes-wrapper"]}>
                          {daysOfTheWeek}
                        </div>
                        {errors.daysOfTheWeek && touched.daysOfTheWeek && (
                          <div className={classes.error}>
                            {errors.daysOfTheWeek}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <button type="submit" className={classes.btn}>
                    Сохранить
                  </button>
                </Form>
              )}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default InfoChange;
