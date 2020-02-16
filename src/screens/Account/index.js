import React, { Component } from 'react';
import classes from './Account.module.css';

import ProfileImageChange from '../../components/ProfileImageChange';
import InfoChange from '../../components/InfoChange';
import PasswordChange from '../../components/PasswordChange';
import ButtonDeleteAccount from '../../components/ButtonDeleteAccount';

import { withAuthorization } from '../../config/Session'; //protected routing

class Account extends Component {
	state = {
		loading: true,
		info: {}
	}

	componentDidMount() {
		this.props.firebase.user(this.props.authWalker.uid).on('value', snapshot => {
			const userInfo = snapshot.val()
			this.setState({
				loading: false,
				info: userInfo
			})
		})
	}

	componentWillUnmount() {
		this.props.firebase.user().off();
	}

	render() {
		const { loading } = this.state;

		if (loading) {
			return (
				<div className={classes.account}>
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
				</div>
			)
		}
		return (
			<div className={classes.account}>
				<div className={classes["account-info"]}>
					<ProfileImageChange profileImage={this.state.info ? this.state.info.photo : ""} authWalker={this.props.authWalker} />
					<InfoChange authWalkerInfo={this.state.info} authWalker={this.props.authWalker}/>
				</div>
				<PasswordChange />
				<ButtonDeleteAccount authWalker={this.props.authWalker}/>
			</div>
		)
	}
}

const condition = authWalker => !!authWalker;

export default withAuthorization(condition)(Account);