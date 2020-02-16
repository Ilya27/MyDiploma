import React from 'react';
import classes from './DatePickerField.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


library.add( faCalendarAlt, faLongArrowAltRight )


const DatePickerField=({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  ...props
}) =>{
    return(
                      <div className={classes.datePickerField}>
                          <div className={classes.testClass}>
                            <DatePicker
                                className={classes.datePicker}
                                selected={value.startDate}
                                selectsStart
                                startDate={value.startDate}
                                endDate={value.endDate}
                                onChange={(e)=>{
                                    setFieldValue('startDate',e)
                                    // new Date(e).toLocaleDateString()
                                } }
                                placeholderText={props.firstField}
                                dateFormat="MMMM d, yyyy "
                                dayClassName={date => date.getTime() + 8.64e+7 >= new Date().getTime() ?
                                        classes.dayColor : classes["dayColor-disabled"]}
                                minDate={new Date()}
                                name='startDate'
                            />
                          </div>
                          <span><FontAwesomeIcon className={classes.calcIcon} icon='calendar-alt'/></span>

                          <div className={classes.arrow}>
                            <FontAwesomeIcon icon='long-arrow-alt-right'/>
                          </div>
                          <div className={classes.testClass}>
                        <DatePicker
                              className={classes.datePicker}
                              selected={value.endDate}
                              selectsEnd
                              startDate={value.startDate}
                              endDate={value.endDate}
                              onChange={(e)=>{
                                  setFieldValue('endDate',e)
                                  // new Date(e).toLocaleDateString()
                              } }
                              placeholderText={props.secondField}
                              dateFormat="MMMM d, yyyy "
                              dayClassName={date => date.getTime() + 8.64e+7 >= new Date().getTime() ?
                                      classes.dayColor : classes["dayColor-disabled"]}
                              minDate={new Date()}
                              name='endDate'
                        />
                        </div>
                        <span>  <FontAwesomeIcon className={classes.calcIcon} icon='calendar-alt'/> </span>
                          </div>
  )

}



export default DatePickerField;
