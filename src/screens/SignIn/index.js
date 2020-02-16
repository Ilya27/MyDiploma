import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Formik, Form } from "formik";
import { SignInSchema } from '../../config/yupConfig';
import SignInFacebook from '../../components/SignInFacebook';
import DefaultInput from '../../components/ReusableComponents/DefaultInput';
import PasswordInput from '../../components/ReusableComponents/PasswordInput';
import { SignUpLink } from '../Registration';
import { PasswordForgetLink } from '../PasswordForget';
import classes from './SignIn.module.css';


class SignIn extends Component {	
	render() {
		return (
			<div className={classes["signin-form-holder"]}>
				<h1 className={classes.h1}>Sign in to DogWalker</h1>
				<div className={classes["signin-form-wrapper"]}>
					<SignInFacebook />
					<h6 className={classes.h6}>— or —</h6>
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						validationSchema={SignInSchema}
						onSubmit={( values, { resetForm } ) => {
							this.props.firebase
								.doSignInWithEmailAndPassword(values.email, values.password)
									.then(() => {
										resetForm({
											email: '',
											password: ''
										})
										this.props.history.push("/account")
									})
									.catch(error => {
										resetForm({
											email: values.email,
											password: ''
										})
										toast.error(`${error.message}`)
									})
						}}
						render={({errors, touched}) => (
							<Form>
								<DefaultInput id="signInEmail" label="Email" name="email" type="email" errors={errors} touched={touched} />

								<PasswordInput id="signInPassword" label="Password" name="password" errors={errors} touched={touched} />

								<button type="submit" className={classes.btn}>Sign in</button>
								<PasswordForgetLink />
								<SignUpLink />
							</Form>
						)}
					/>
				</div>
			</div>
		)
	}
}

export default SignIn;