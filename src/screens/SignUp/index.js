import React, { Component } from 'react';
import classes from './SignUp.module.css';
import SignInFacebook from '../../components/SignInFacebook';
import ButtonRegistration from '../../components/ButtonRegistration';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

class SignUp extends Component {
	render() {
		return (
			<div className={classes.signup}>
				<h1 className={classes["h1-registration"]}>Sign up for Dogs Friend</h1>
				<div className={classes["signup-wrapper"]}>
				<SignInFacebook />
				<h6 className={classes["h6-registration"]}>— or —</h6>
				<ButtonRegistration />
				</div>
				<p className={classes["sign-info"]}>By signing in or signing up, I agree to DogsFriend.com's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>, confirm that I am 18 years of age or older, and consent to receiving email communication.</p>
				<p className={classes["have-account"]}>Already have a DogsFriend account? <Link to="/signin">Sign in now.</Link></p>
			</div>
		)
	}
}

export default withRouter(withFirebase(SignUp));
