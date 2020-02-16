import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import AuthWalkerContext from './context';	

const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			this.listener = this.props.firebase.auth.onAuthStateChanged(
				authWalker => {
					if (!condition(authWalker)) {
						this.props.history.push("/signin");
					}
				},
			);
		}

		componentWillUnmount() {
			this.listener();
		}
		render() {
		return (
			<AuthWalkerContext.Consumer>
				{authWalker => {
						return condition(authWalker) 
							? <Component {...this.props} authWalker={authWalker} /> 
							: null
					}
				}
			</AuthWalkerContext.Consumer>
		)
		}
	}

	return compose(
		withRouter,
		withFirebase,
	)(WithAuthorization);
};

export default withAuthorization;