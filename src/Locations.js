//Location.js is enables allows the user to view information on the screen

import React from "react";

//{locations --> existing state passed from App.js, deleteLocation --> function passed from App.js}
const Locations = ({ locations, deleteLocation }) => {
	// locationList maps each value in the state to a jsx template
	const locationList = locations.length ? (
		locations.map((location) => {
			return (
				<div className="center collection-item" key={locations.id}>
					<span
						onClick={() => {
							deleteLocation(location.id);
						}}
					>
						Location: {location.location} &nbsp;&nbsp;&nbsp; |
						&nbsp;&nbsp;&nbsp;Total Drones: {location.drones} &nbsp;&nbsp;&nbsp;
						| &nbsp;&nbsp;&nbsp; Square Area: {location.area} &nbsp;&nbsp;&nbsp;
						| &nbsp;&nbsp;&nbsp; Drones/sqmi: {location.density}{" "}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">Please Enter a Desired Location Below: </p> //Occurs if there are now locations in the state
	);
	return <div className="locations collection">{locationList}</div>;
};
export default Locations;
