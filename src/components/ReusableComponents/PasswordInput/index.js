import React, { Component } from 'react';
import classes from './PasswordInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from "formik";

class PasswordInput extends Component {
	state = {
		showPassword: false
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}

	render() {
		const showPassword = this.state.showPassword ? 'eye' : 'eye-slash';
		return (
			<div className={classes["input-wrapper"]}>
				<label htmlFor={this.props.id} className={classes.label}>{this.props.label}</label>
				<Field
					id={this.props.id}
					className={classes.input + (this.props.errors[this.props.name] && this.props.touched[this.props.name] ? ` ${classes["is-invalid"]}` : '')}
					name={this.props.name}
					type={this.state.showPassword ? 'text': 'password'}
				/>
				<button onClick={this.handleShowPassword.bind(this)} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
				{this.props.errors[this.props.name] && this.props.touched[this.props.name] && (
					<div className={classes.error}>{this.props.errors[this.props.name]}</div>
				)}
			</div>
		)
	}
}

export default PasswordInput