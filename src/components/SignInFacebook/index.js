import React, { Component } from 'react';
import classes from './SignInFacebook.module.css';

import { Formik, Form } from "formik";
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';

class SignInFacebookBase extends Component {
	render() {
		return (
			<Formik
				onSubmit={() => {
					this.props.firebase
						.doSignInWithFacebook()
						.then(socialAuthWalker => {
							console.log(socialAuthWalker, '!')
							return this.props.firebase
								.user(socialAuthWalker.user.uid)
								.set({
									name: socialAuthWalker.user.displayName,
									email: socialAuthWalker.user.email,
									city: socialAuthWalker.additionalUserInfo.profile.location.name,
									salary: 50,
									services: [ "Dog Boarding", "House Sitting", "Drop-In Visits", "Doggy Day Care", "Dog Walking" ],
									dogSizes: [ "Small", "Medium", "Large", "Giant" ],
									daysOfTheWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
									photo: socialAuthWalker.user.photoURL,
									address: ''
								})
						})
						.then(() => {
							this.props.history.push("/")
						})
						.catch(error => {
							toast.error(`${error.message}`)
						})
				}}
				render={() => (
					<Form>
						<button type="submit" className={classes.btn}><FontAwesomeIcon icon={['fab', 'facebook']} /> Sign in with Facebook</button>
					</Form>
				)}
			/>
		)
	}
}

const SignInFacebook = compose(
	withRouter,
	withFirebase,
)(SignInFacebookBase)

export default SignInFacebook;