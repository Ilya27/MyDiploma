import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Logo.module.css';

const Logo = () => (
	<span className={classes["logo-wrapper"]}>
		<Link to="/" className={classes.logo}>
			<FontAwesomeIcon icon="paw" /> DogWalker
		</Link>
	</span>
)

export default Logo;