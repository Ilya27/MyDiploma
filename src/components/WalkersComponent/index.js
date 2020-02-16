import React, { Component } from 'react';
import classes from './WalkersComponent.module.css';

import { Link } from 'react-router-dom';

class WalkersComponent extends Component {
	render() {
		return (
			<div className={classes["walkers-holder"]}>
				{this.props.walkers ? (
					<div className={classes["walkers-wrapper"]}>
						{this.props.walkers.map(( item, index ) => (
							<div className={classes["walker-flexbox"]} key={item.uid}>
								<img src={item.photo} alt={item.name} className={classes.avatar} />
								<div className={classes["walker-info-wrapper"]}>
									<div>
										<h1 className={classes.h1}>{++index}. <Link to={`walker/${item.uid}`} className={classes.name}>{item.name}</Link></h1>
										<p className={classes.city}>{item.city} {item.address}</p>
										<p className={classes.email}>{item.email}</p>
									</div>
									<div>
										<h2 className={classes.h2}>salary</h2>
										<p className={classes.salary}>{item.salary}$</p>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className={classes["without-walkers"]}>
						<h1 className={classes.h1}>We couldn't find any sitters that matched your criteria.</h1>
						<h2 className={classes.h2}>Try changing your search criteria or updating your location.</h2>
					</div>
				)}
			</div>
		)
	}
}

export default WalkersComponent