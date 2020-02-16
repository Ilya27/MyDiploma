import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Formik, Form } from "formik";
import { RegistrationSchema } from '../../config/yupConfig';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/ReusableComponents/Checkbox';
import DefaultInput from '../../components/ReusableComponents/DefaultInput';
import PasswordInput from '../../components/ReusableComponents/PasswordInput';
import data from '../../components/constants/data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';

class Registration extends Component {
	state = {
		imageSrc: ''
	}

	handleFiles = (event) => {
		let fileReader = new FileReader()
		if (event.target.files[0]) {
			fileReader.readAsDataURL(event.target.files[0])
			fileReader.onload = ( event ) => {
				this.setState({imageSrc: event.target.result})
			}
		} else {
			this.setState({imageSrc: ''})
		}
	}

	render() {
		let services = data.dog.map(item => (
			<Checkbox name="checkboxes" value={item.text} icon={item.icon} box={classes.box} key={item.text}/>
		))
		let dogSizes = data.weights.map(item => (
			<Checkbox name="dogSizes" value={item.dogSize} text={item.weight} box={classes["box-dog"]} key={item.dogSize} />
		))
		return (
			<div className={classes["form-holder"]}>
				<h1 className={classes.h1}>Sign up for DogWalker</h1>
				<div className={classes["form-wrapper"]}>
					<Formik
						initialValues={{
							firstname: '',
							lastname: '',
							city: '',
							salary: 10,
							checkboxes: [],
							dogSizes: [],
							email: '',
							password: ''
						}}
						validationSchema={RegistrationSchema}
						onSubmit={ ( values, { resetForm } ) => {
							this.props.firebase
								.doCreateUserWithEmailAndPassword(values.email, values.password)
								.then((authWalker) => {
									authWalker.user.updateProfile({
										displayName: `${values.firstname} ${values.lastname}`
									})
									return this.props.firebase
										.user(authWalker.user.uid)
										.set({
											name: `${values.firstname} ${values.lastname}`,
											email: values.email,
											city: values.city,
											salary: values.salary,
											photo: this.state.imageSrc ? this.state.imageSrc : 'https://firebasestorage.googleapis.com/v0/b/dogwalker-88634.appspot.com/o/nouser.png?alt=media&token=c9ac80be-94e4-4129-92f7-2dbba891175b',
											services: values.checkboxes,
											dogSizes: values.dogSizes,
											daysOfTheWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
											address: '',
										})
								})
								.then(() => {
									resetForm({
										firstname: '',
										lastname: '',
										city: '',
										salary: 10,
										checkboxes: [],
										dogSizes: [],
										email: '',
										password: ''
									})
									this.props.history.push("/")
								})
								.catch(error => {
									toast.error(`${error.message}`)
								})
						}}
						render={({errors, touched}) => (
							<Form>
								<DefaultInput id="walkerFirstName" label="Firstname" name="firstname" type="text" errors={errors} touched={touched} />

								<DefaultInput id="walkerLastName" label="Lastname" name="lastname" type="text" errors={errors} touched={touched} />

								<DefaultInput id="walkerCity" label="City" name="city" type="text" errors={errors} touched={touched} />

								<DefaultInput id="walkerSalary" label="Salary" name="salary" type="number" errors={errors} touched={touched} />

								<div className={classes["input-wrapper"]}>
									<label className={classes.label}>Services</label>
									<div className={classes["checkboxes-wrapper"]}>
										{services}
									</div>
									{errors.checkboxes && touched.checkboxes && (
										<div className={classes.error}>{errors.checkboxes}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label className={classes.label}>Dog sizes</label>
									<div className={classes["checkboxes-wrapper"]}>
										{dogSizes}
									</div>
									{errors.dogSizes && touched.dogSizes && (
										<div className={classes.error}>{errors.dogSizes}</div>
									)}
								</div>

								<DefaultInput id="walkerEmail" label="Email" name="email" type="email" errors={errors} touched={touched} />

								<PasswordInput id="walkerPassword" label="Password"	name="password" errors={errors} touched={touched} />

								<div className={classes["file-wrapper"]}>
									<input type="file" onChange={this.handleFiles.bind(this)} className={classes.inputfile} id="file"/>
									<label htmlFor="file">
										<FontAwesomeIcon icon="download" /> Choose a file
									</label>
									<img src={this.state.imageSrc} className={classes.file} alt="" />
								</div>

								<button type="submit" className={classes.btn}>Sign up</button>
								<p className={classes.info}>By signing in or signing up, I agree to DogWalker.com's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>, confirm that I am 18 years of age or older, and consent to receiving email communication.</p>
								<p className={classes["have-account"]}>Already have a DogWalker account? <Link to="/signin">Sign in now.</Link></p>
							</Form>
						)}
					/>
				</div>
			</div>
		)
	}
}

export const SignUpLink = () => (
	<p>
	  Don't have an account? <Link to="/signup">Sign Up</Link>
	</p>
);

export default Registration;
