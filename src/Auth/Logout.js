import React, { Component } from 'react';
import AuthService from "./AuthService";
import { Redirect } from 'react-router-dom';


export class Logout extends Component {
	constructor(props) {
		super(props);
		this.service = new AuthService();
	}
	render() {
		this.service
			.logout()
			.then((response) => {
				console.log(response)
				this.props.getUser(null);
			})
			.catch((error) => console.log(error));
		return <Redirect to={'/'} />;
	}
}
export default Logout;