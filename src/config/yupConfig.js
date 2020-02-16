import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
	firstname: Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid first name.'
		}),
	lastname:  Yup.string()
		.required("Required")
		.matches(/^[a-zA-Z]+$/, {
			message: 'Please specify a valid last name.'
		}),
	city: Yup.string()
		.required("Required"),
	salary: Yup.number()
		.min(10, "Minimal salary is 10$")
		.max(100, "Maximum salary is 100$")
		.required("Required"),
	checkboxes: Yup.array()
		.required('At least one service is required'),
	dogSizes: Yup.array()
		.required('At least one size is required'),
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
});

export const SearchSchema = Yup.object().shape({
	city: Yup.string()
		.required("Required")
})

export const SignInSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required")
})

export const ForgetSchema = Yup.object().shape({
	email: Yup.string()
		.email("Please specify a valid email.")
		.required("Required")
})

export const ChangeSchema = Yup.object().shape({
	passwordOne: Yup.string()
		.required("Required"),
	passwordTwo: Yup.string()
		.oneOf([Yup.ref('passwordOne'), null], 'Passwords must similar')		
		.required("Required"),
	newPassword: Yup.string()
		.min(8, "Must be longer than 8 characters")
		.required("Required")
})

export const InfoChangeSchema = Yup.object().shape({
	city: Yup.string()
		.required("Required"),
	salary: Yup.number()
		.min(10, "Minimal salary is 10$")
		.max(100, "Maximum salary is 100$")
		.required("Required"),
	checkboxes: Yup.array()
		.required('At least one service is required'),
	dogSizes: Yup.array()
		.required('At least one size is required'),
	daysOfTheWeek: Yup.array()
		.required('At least one size is required')
})