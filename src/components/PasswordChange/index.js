import React, { Component } from 'react';
import classes from './PasswordChange.module.css';

import PasswordInput from '../ReusableComponents/PasswordInput';

import { Formik, Form } from "formik";
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { ChangeSchema } from '../../config/yupConfig';

import { toast } from 'react-toastify';

class PasswordChangeBase extends Component {
	render() {
		return (
			<div className={classes["change-form-wrapper"]}>
				<Formik
					initialValues={{
						passwordOne: '',
						passwordTwo: '',
						newPassword: ''
					}}
					validationSchema={ChangeSchema}
					onSubmit={( values, { resetForm } ) => {
						console.log(values)
						this.props.firebase
							.doPasswordUpdate(values.newPassword)
							.then(() => {
								resetForm({
									passwordOne: '',
									passwordTwo: '',
									newPassword: ''
								})
								toast.success("You changed your password successfully!")
							})
							.catch(error => {
								toast.error(`${error.message}`)
							})
					}}
					render={({errors, touched}) => (
						<Form>
							<h1 className={classes.h1}>Change Password</h1>
							<PasswordInput id="changePasswordOne" label="Password" name="passwordOne" errors={errors} touched={touched} />

							<PasswordInput id="changePasswordTwo" label="Repeat password" name="passwordTwo" errors={errors} touched={touched} />
							
							<PasswordInput id="newPassword" label="New password" name="newPassword" errors={errors} touched={touched} />

							<button type="submit" className={classes.btn}>Sign in</button>
						</Form>
					)}
				/>
			</div>
		)
	}
}

const PasswordChange = withRouter(withFirebase(PasswordChangeBase))

export default PasswordChange;