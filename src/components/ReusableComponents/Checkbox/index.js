import React, { Fragment } from "react";
import classes from "./Checkbox.module.css";

import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkbox = props => (
  <Field name={props.name}>
    {({ field, form }) => (
      <div className={props.box}>
        <Fragment>
          <input
            className={classes.checkbox}
            type="checkbox"
            id={props.value}
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  value => value !== props.value
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          <label className={classes.label} htmlFor={props.value}>
            {props.icon ? (
              <span className={classes["icon-wrapper"]}>
                <FontAwesomeIcon icon={props.icon} />
              </span>
            ) : null}
            <span className={classes["value-wrapper"]}>{props.value}</span>
            {props.text ? (
              <span className={classes["icon-wrapper"]}>{props.text}</span>
            ) : null}
          </label>
        </Fragment>
      </div>
    )}
  </Field>
);

export default Checkbox;
