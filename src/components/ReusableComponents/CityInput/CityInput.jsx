import React from 'react';
import classes from './CityInput.module.css';
import  { Select } from 'antd';
import 'antd/lib/select/style/index.css';
import data from '../../constants/data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CityInput=({
  field: { name, value, onChange, onBlur },
  form:{setFieldValue, handleChange, errors, touched},
  ...props
}) =>{
const { Option } = Select;
const onClickClear = () => {
  setFieldValue('city', '')
}
    return(
                      <div>
                          <label htmlFor="city"> {props.values} near</label>

                          <div className={classes["city-wrapper"]}>
                            <Select
                                showSearch
                                // allowClear={true}
                                id={props.id}
                                className={
                                      errors.city && touched.city ? classes.inputError : classes.cityInput
                                    }
                                size="large"
                                value={value}
                                placeholder="Enter City"
                                optionFilterProp="children"
                                onChange={
                                  handleChange('city')
                                  // (value)=>{setFieldValue('city', value)}
                                }
                                filterOption={(input, option) =>
                                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                              >
                            {data.cities.map(data=>  <Option value={data.content} key={Math.random()}>{data.content}</Option>)}
                            </Select>
                            {value ? <button type="button" onClick={onClickClear} className={classes.btn}><FontAwesomeIcon icon="times"/></button> : null}
                          </div>
                        </div>

  )
}

// {errors.city &&
//         <p style={{ fontSize: 12, color: 'red' }}>*{errors.city}</p>
//       }

export default CityInput;
