import React, { Component } from 'react'
import classes from './FooterForm.module.css'
import { Link } from 'react-router-dom';

class FooterForm extends Component {
	render() {
		return (
			<div className={classes.FooterForm}>
				<form>
					<h4>Get cute puppies in your inbox</h4>
					<input type='email' name='email' placeholder='Email Address' />
					<button type='submit'>Submit</button>
					<p>By providing my e-mail address, I consent to receive marketing <br />
						communications from DogWalker.com and its affiliates. <Link to="/privacy">Privacy Policy</Link></p>
				</form>
			</div>
		)
	}
}

export default FooterForm
