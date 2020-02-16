import React, { Component } from 'react';
import classes from './ButtonDeleteAccount.module.css';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

import { toast } from 'react-toastify';

class ButtonDeleteAccountBase extends Component {
	handleClick = () => {
		this.props.firebase.deleteUser().then(
			this.props.history.push("/signin")
		)

		this.props.firebase.user(this.props.authWalker.uid)
			.remove()

			toast.success("The profile is deleted!")
	}
	render() {
		return (
			<div className={classes["delete-btn-wrapper"]}>
				<button type="button" onClick={this.handleClick.bind(this)} className={classes.btn}>Delete this account</button>
			</div>
		)
	}
}

const ButtonDeleteAccount = withRouter(withFirebase(ButtonDeleteAccountBase))

export default ButtonDeleteAccount;