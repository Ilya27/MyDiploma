import React from 'react';
import AuthWalkerContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
	state= {
		authWalker: null
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(
		  authWalker => {
			authWalker
			  ? this.setState({ authWalker })
			  : this.setState({ authWalker: null });
		  },
		);
	}
	
	componentWillUnmount() {
		this.listener();
	}
	render() {
		return (
			<AuthWalkerContext.Provider value={this.state.authWalker}>
				<Component {...this.props} />
			</AuthWalkerContext.Provider>
		);
	}
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;