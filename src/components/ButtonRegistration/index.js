import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './ButtonRegistration.module.css';

class ButtonRegistration extends Component {
	render() {
		return (
			<Link to="/registration" ><button className={classes["btn-registration"]}><FontAwesomeIcon icon="envelope" /> Sign Up</button></Link>
		)
	}
}

export default ButtonRegistration;