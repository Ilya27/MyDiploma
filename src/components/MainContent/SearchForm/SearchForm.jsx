import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import Checkbox from "./../../ReusableComponents/Checkbox";
import ButtonGroup from "./../../ReusableComponents/ButtonGroup/ButtonGroup";
import CityInput from "./../../ReusableComponents/CityInput/CityInput";
import data from "./../../constants/data";
import classes from "./SearchForm.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSuitcaseRolling,
  faPaw,
  faDog,
  faSun,
  faWalking,
  faCat,
  faSync,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import DatePickerOneField from "./../../ReusableComponents/DatePickerField/DatePickerOneField";
import DatePickerField from "./../../ReusableComponents/DatePickerField/DatePickerField";
import { SearchSchema } from "../../../config/yupConfig";

library.add(
  faHome,
  faSuitcaseRolling,
  faPaw,
  faDog,
  faSun,
  faWalking,
  faCat,
  faSync,
  faCalculator
);

const SearchForm = props => {
  return (
    <Fragment>
      <div className={classes.searchFormContainer}>
        <Formik
          initialValues={{ services: [], dogSizes: [] }}
          validationSchema={SearchSchema}
          onSubmit={values => {}}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue
          }) => {
            return (
              <>
                <Form onSubmit={handleSubmit} className={classes.searchFormBox}>
                  <div className={classes.petType}>
                    <h3>I'm looking for service for my Dog</h3>
                  </div>
                  <div className={classes.buttonsBox}>
                    <div className={classes.firstButtonsBox}>
                      <label htmlFor="dogButtonsAwayGroup">
                        For When You're Away
                      </label>
                      <div
                        id="dogButtonsAwayGroup"
                        className={classes.dogAwayButtonsDiv}
                      >
                        {data.dog.slice(0, 3).map(data => (
                          <Field
                            component={ButtonGroup}
                            props={data}
                            key={Math.random()}
                            firstNameField="services"
                            classNameText="buttonField"
                          />
                        ))}
                      </div>
                    </div>
                    <div className={classes.secondButtonsBox}>
                      <label htmlFor="dogButtonsAtWorkGroup">
                        For When You're At Work
                      </label>
                      <div
                        id="dogButtonsAtWorkGroup"
                        className={classes.dogAtWorkButtonsDiv}
                      >
                        {data.dog.slice(3, 5).map(data => (
                          <Field
                            component={ButtonGroup}
                            props={data}
                            key={Math.random()}
                            firstNameField="services"
                            classNameText="buttonField"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Field
                      render={() => {
                        const step = values.services;
                        switch (step) {
                          case "Dog Boarding":
                          case "House Sitting":
                            return (
                              <div className={classes.cityInputAndDatePicker}>
                                <div className={classes.cityInput}>
                                  <Field
                                    component={CityInput}
                                    type="text"
                                    id="city"
                                    name="city"
                                    values={values.services}
                                  />
                                </div>
                                <div className={classes.datePickerField}>
                                  <label>For these days</label>
                                  <Field
                                    component={DatePickerField}
                                    firstField={
                                      values.services === "Dog Boarding"
                                        ? "Drop off"
                                        : "Start date"
                                    }
                                    secondField={
                                      values.services === "Dog Boarding"
                                        ? "Pick Up"
                                        : "End date"
                                    }
                                  />
                                </div>
                              </div>
                            );
                          case "Drop-In Visits":
                          case "Doggy Day Care":
                          case "Dog Walking":
                            return (
                              <div className={classes.cityInputAndRegularity}>
                                <div className={classes.cityInputContainer}>
                                  <Field
                                    component={CityInput}
                                    type="text"
                                    id="city"
                                    name="city"
                                    values={values.services}
                                  />
                                </div>

                                <div
                                  className={classes.oftenNeedServiceContainer}
                                >
                                  <label htmlFor="oftenNeedService">
                                    How often do you need this service? (
                                    {values.services})
                                  </label>
                                  <div
                                    id="oftenNeedService"
                                    className={classes.oftenNeedService}
                                  >
                                    {data.oftenNeedService.map(data => (
                                      <Field
                                        component={ButtonGroup}
                                        props={data}
                                        key={Math.random()}
                                        firstNameField="regularity"
                                        secondNameField="endDate"
                                        classNameText="regularityButtonField"
                                      />
                                    ))}
                                  </div>
                                </div>

                                <Field
                                  render={() => {
                                    const step = values.regularity;
                                    switch (step) {
                                      case "One Time":
                                        return (
                                          <div
                                            className={classes.datePickerField2}
                                          >
                                            <label>For what dates?</label>
                                            <Field
                                              component={DatePickerField}
                                              firstField="Start date"
                                              secondField="End date"
                                            />
                                          </div>
                                        );
                                      case "Repeat Weekly":
                                        return (
                                          <div
                                            className={
                                              classes.daysOfTheWeekAndDatePickerOneFieldContainer
                                            }
                                          >
                                            <div
                                              className={
                                                classes.daysOfTheWeekContainer
                                              }
                                            >
                                              <label htmlFor="daysOfTheWeek">
                                                For which days?
                                              </label>
                                              <div
                                                className={
                                                  classes.daysOfTheWeekBox
                                                }
                                                id="daysOfTheWeek"
                                              >
                                                {data.daysOfTheWeek.map(
                                                  data => (
                                                    <Checkbox
                                                      name="daysOfTheWeek"
                                                      value={data.value}
                                                      box={
                                                        classes.daysOfTheWeek
                                                      }
                                                      key={Math.random()}
                                                    />
                                                  )
                                                )}
                                              </div>
                                            </div>
                                            <div
                                              className={
                                                classes.datePickerOneField
                                              }
                                            >
                                              <label>Start date</label>
                                              <Field
                                                component={DatePickerOneField}
                                                firstField="Start date"
                                              />
                                            </div>
                                          </div>
                                        );
                                      default:
                                        return null;
                                    }
                                  }}
                                />
                              </div>
                            );
                          default:
                            return null;
                        }
                      }}
                    />
                  </div>

                  <div className={classes.lastField}>
                    <div>
                      <div>My Dog Size</div>
                      <div className={classes.dogSizeAndWeights}>
                        {data.weights.map(item => (
                          <Checkbox
                            name="dogSizes"
                            value={item.dogSize}
                            text={item.weight}
                            box={classes["box-dog"]}
                            key={item.dogSize}
                          />
                        ))}
                      </div>
                    </div>
                    <button type="submit" className={classes.submitButton}>
                      Search
                    </button>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </Fragment>
  );
};

export default SearchForm;
