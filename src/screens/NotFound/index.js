import React from 'react';
import img from '../../images/404.png';
import classes from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={classes.wrapper}>
			<img src={img} alt="404" />
		</div>
	)
}

export default NotFound;