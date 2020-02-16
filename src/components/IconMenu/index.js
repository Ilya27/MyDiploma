import React, { Component } from 'react';
import classes from './IconMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconMenu extends Component {
	render() {
		return (
			<>
				<div className={classes["menu-icon"]} onClick={this.props.openMenu}>
					<FontAwesomeIcon icon="bars" />
				</div>
			</>
		)
	}
}

export default IconMenu;