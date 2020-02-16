import React from 'react';
import classes from './SignOutButton.module.css';

import { withFirebase } from '../../config/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignOutButton = ({ firebase }) => (
	<button type="button" onClick={firebase.doSignOut} className={classes.btn}>
		<FontAwesomeIcon icon="user-times" /> Sign Out
	</button>
  );
  
  export default withFirebase(SignOutButton);