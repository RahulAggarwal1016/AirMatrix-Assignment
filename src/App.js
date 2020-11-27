/*
Title: Air Matrix Coding Assignment
Date Assigned: Tuesday, June 16, 2020
Creator: Rahul Aggarwal
*/

//App.js is the root component of the project

import React, { Component } from "react";
import "./App.css";
import Locations from "./Locations"; //enables data to be displayed on screen
import AddLocation from "./AddLocation"; //enables user to add a location
import Notifications, { notify } from "./Notifications/index.js"; //enables a notification to be sent
import axios from "axios"; //allows us to grab data from a json data base
import Posts from "./Posts";
import Name from "./images/name.png";
import City from "./images/city.png";
import greenDrone from "./images/green_drone.png";
import redDrone from "./images/red_drone.png";

class App extends Component {
	state = {
		data: [],
	};

	deleteLocation = (id) => {
		let locations = this.state.data.filter((location) => {
			return location.id !== id; //checks if the id of unwanted location matches an item in list
		});
		this.setState({
			data: locations,
		});
	};
	addLocation = (new_location) => {
		new_location.id = Math.random();
		new_location.drones = Math.round(Math.random() * 300000);
		new_location.area = Math.round(Math.random() * 150000);
		new_location.density = Math.round(new_location.drones / new_location.area);

		let locations = [...this.state.data, new_location];

		//Check if location has previously been typed before
		let values = [];
		var i = null;
		for (i of this.state.data) {
			values.push(i.location);
		}
		if (!values.includes(new_location.location)) {
			this.setState({
				data: locations,
			});
		} else {
			notify("This is a notification");
		}
	};

	render() {
		return (
			<div className="airmatrix container">
				<img src={Name} alt="Name of Company" className="name" />
				<h3 className="center green-text text-accent-4">Statistics: </h3>
				<Locations
					locations={this.state.data}
					deleteLocation={this.deleteLocation}
				/>
				<AddLocation addLocation={this.addLocation} />
				<Posts />
				<img src={greenDrone} alt="A group of drones" className="green1" />
				<img src={greenDrone} alt="A group of drones" className="green2" />
				<img src={redDrone} alt="A group of drones" className="red1" />
				<img src={redDrone} alt="A group of drones" className="red2" />
				<img src={City} alt="City" className="city1" />
				<img src={City} alt="City" className="city2" />
				<Notifications />
			</div>
		);
	}
}

export default App;
