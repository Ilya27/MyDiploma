import React, { Component } from 'react';
import classes from './ButtonRegistration.module.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ButtonRegistration extends Component {
	render() {
		return (
			<Link to="/registration" ><button className={classes["btn-registration"]}><FontAwesomeIcon icon="envelope" /> Sign Up</button></Link>
		)
	}
}

export default ButtonRegistration;