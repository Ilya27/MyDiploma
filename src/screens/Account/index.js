import React, { Component } from 'react';
import classes from './Account.module.css';

import ProfileImageChange from '../../components/ProfileImageChange';
import InfoChange from '../../components/InfoChange';
import PasswordChange from '../../components/PasswordChange';
import ButtonDeleteAccount from '../../components/ButtonDeleteAccount';

class Account extends Component {
	render() {
		// const { loading } = this.state;

		// if (loading) {
		// 	return (
		// 		<div className={classes.account}>
		// 			<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
		// 		</div>
		// 	)
		// }
		return (
			<div className={classes.account}>
				<div className={classes["account-info"]}>
					<ProfileImageChange/>
					<InfoChange/>
				</div>
				<PasswordChange />
				<ButtonDeleteAccount/>
			</div>
		)
	}
}
export default Account;