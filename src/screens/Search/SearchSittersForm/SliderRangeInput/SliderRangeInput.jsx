import React from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';

const SliderRangeInput=({
  field,
  form,
  ...props
}) =>{
  const marks = {
  10:  {
    label: <strong>${field.value.salary[0]}</strong>,
  },
  100:  {
    label: <strong>${field.value.salary[1]}</strong>,
  },
};

    return(
                      <div>

                            <Slider
                                  range
                                  marks={marks}
                                  min={props.min}
                                  max={props.max}
                                  defaultValue={props.defaultValue}
                                  tipFormatter={(value)=>{
                                  return `$${value}`}}
                                  onAfterChange={(value)=>
                                    form.setFieldValue("salary", value)
                                  }
                          />

                        </div>

  )
}


export default SliderRangeInput;
