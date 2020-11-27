//AddLocation.js enables the user to be able to add a location to the "database"

import React, { Component } from "react";

class AddLocation extends Component {
	state = {
		location: "",
	};
	//handleChange executes when the user types a location and thereby automatically updating the local state
	handleChange = (e) => {
		this.setState({
			location: e.target.value,
		});
	};
	//handleSubmit executes when the user submits a location; sends the updated state to App.js and then clears the local state
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addLocation(this.state);
		this.setState({
			location: "",
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add New Location:</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.location}
					/>
					<br />
					<br />
				</form>
			</div>
		);
	}
}

export default AddLocation;
