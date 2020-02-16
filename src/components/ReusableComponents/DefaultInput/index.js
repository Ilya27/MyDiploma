import React from 'react';
import classes from './DefaultInput.module.css';

import { Field } from "formik";

const DefaultInput = (props) => (
	<div className={classes["input-wrapper"]}>
		<label htmlFor={props.id} className={classes.label}>{props.label}</label>
		<Field
			id={props.id}
			className={classes.input + (props.errors[props.name] && props.touched[props.name] ? ` ${classes["is-invalid"]}` : '')}
			name={props.name}
			type={props.type}
		/>
		{props.errors[props.name] && props.touched[props.name] && (
			<div className={classes.error}>{props.errors[props.name]}</div>
		)}
	</div>
)

export default DefaultInput;