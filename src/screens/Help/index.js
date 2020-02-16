import React, { Component } from 'react';
import classes from './Help.module.css';
import { Link } from 'react-router-dom';

class Help extends Component {
	render() {
		return (
			<div className={classes["help-wrapper"]}>
				<h1 className={classes.h1}>Help</h1>
				<Link to="/aboutus" className={classes.btn}>About us</Link>
				<Link to="/terms" className={classes.btn}>Terms of Services</Link>
				<Link to="/privacy" className={classes.btn}>Privacy Statement</Link>
			</div>
		)
	}
}

export default Help;