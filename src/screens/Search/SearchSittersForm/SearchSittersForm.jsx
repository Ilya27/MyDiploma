import React from 'react';
import { Formik,  Form, Field,  } from "formik";
import Checkbox from '../../../components/ReusableComponents/Checkbox';
import ButtonGroup from '../../../components/ReusableComponents/ButtonGroup/ButtonGroup';
import CityInput from '../../../components/ReusableComponents/CityInput/CityInput';
import DatePickerOneField from '../../../components/ReusableComponents/DatePickerField/DatePickerOneField';
import DatePickerField from '../../../components/ReusableComponents/DatePickerField/DatePickerField';
import data from '../../../components/constants/data';
import classes from './SearchSittersForm.module.css';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';
import SliderRangeInput from './SliderRangeInput/SliderRangeInput';



const SearchSittersForm = (props) => {
  return (
  <>

  <div className={classes.searchFormContainer}>

      <Formik
        initialValues={props.searchParam}
        onSubmit={values => {
          const { setSearchParam } = props;
          setSearchParam(values)
          props.onClickSearch()
        }}

        validate={values=>{
          let errors={};
          if (errors.name){
            errors.name='Name is required';
          }
          return errors;
        }}
        >
        {({
          values,
          handleSubmit,
          handleChange,
          isSubmitting,
          setFieldValue
          }) => (
            <>
          <Form onSubmit={handleSubmit} className={classes.searchSittersFormBox}>

            <div className={classes.buttonsBox}>
                  <label htmlFor="serviceType">Service type</label>
                  <div id="serviceType" className={classes.dogAwayButtonsDiv}>
                      {data.dog.map(data=>
                                       <Field
                                          component={ButtonGroup}
                                          props={data}
                                          key={Math.random()}
                                          firstNameField="services"
                                          classNameText='buttonField'
                                        />
                                    )}
                  </div>
            </div>



            <div>
              <Field
                render={() => {
                const step= values.services;
                switch (step){
                case "Dog Boarding":
                case "House Sitting":
                  return  <div className={classes.cityInputAndDatePicker}>
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
                    <label>Dates</label>
                    <Field
                          component={DatePickerField}
                          firstField={values.services==='Dog Boarding'?"Drop off":"Start date"}
                          secondField={values.services==='Dog Boarding'?"Pick Up":"End date"}
                    />
                    </div>

                </div>
                  case "Drop-In Visits":
                  case "Doggy Day Care":
                  case "Dog Walking":
                    return   <div className={classes.cityInputAndRegularity}>
                              <div className={classes.cityInputContainer}>
                                  <Field
                                        component={CityInput}
                                        type="text"
                                        id="city"
                                        name="city"
                                        values={values.services}
                                  />
                              </div>

                              <div className={classes.oftenNeedServiceContainer}>
                              <label htmlFor="oftenNeedService">How often do you need {values.services} service? </label>
                                <div id="oftenNeedService" className={classes.oftenNeedService}>
                                  {data.oftenNeedService.map(data=>
                                                      <Field
                                                        component={ButtonGroup}
                                                        props={data}
                                                        key={Math.random()}
                                                        firstNameField="regularity"
                                                        classNameText='regularityButtonField'
                                                      /> )}
                                  </div>
                              </div>

                              <Field
                                render={() => {
                                const step= values.regularity;
                                switch (step){
                                  case 'One Time':
                                      return <div className={classes.datePickerField}>
                                                  <label>For what dates?</label>
                                                  <Field
                                                        component={DatePickerField}
                                                        firstField="Start date"
                                                        secondField="End date"
                                                  />
                                              </div>
                                  case "Repeat Weekly":

                                      return <div className={classes.daysOfTheWeekAndDatePickerOneFieldContainer}>
                                                <div className={classes.daysOfTheWeekContainer}>
                                                <label htmlFor="daysOfTheWeek">For which days?</label>
                                                <div className={classes.daysOfTheWeekBox} id="daysOfTheWeek">
                                                {data.daysOfTheWeek.map(data=><Checkbox
                                                          name="daysOfTheWeek"
                                                          value={data.value}
                                                          box={classes.daysOfTheWeek}
                                                          key={Math.random()}
                                                    />)}
                                                  </div>
                                              </div>
                                              <div className={classes.datePickerOneField}>
                                              <label>Start date</label>
                                              <Field
                                                    component={DatePickerOneField}
                                                    firstField="Start date"
                                              />
                                              </div>
                                      </div>
                                      default:
                                          return null
                                }
                              }
                            }/>
                    </div>;
                    default:
                      return null
                  }
                }}
              />
          </div>


          <div className={classes.lastField}>
          <div >
            <div>My Dog Size</div>
              <div className={classes.dogSizeAndWeights}>
                {data.weights.map(data=><Checkbox
                          name="dogSizes"
                          value={data.dogSize}
                          box={classes.dogSizes}
                          text={data.weight}
                          key={Math.random()}
                    />)}
              </div>
             </div>

             <div className={classes.sliderRangeInputContainer}>
                 <Field
                       component={SliderRangeInput}
                       min={10}
                       max={100}
                       defaultValue={values.salary}
                 />
             </div>

            <button type='submit' className={classes.submitButton}>Search</button>
          </div>
          </Form>
          </>
        )}
      </Formik>
    </div>
  </>
)}

export default connect(state => ({searchParam: state.searchParam}), { setSearchParam })(SearchSittersForm)
