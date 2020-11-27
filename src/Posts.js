import React, { Component } from "react";
import axios from "axios";
import drones from "./images/drones.png";

class Posts extends Component {
	state = {
		posts: [],
	};
	componentDidMount() {
		axios
			.get("http://jsonplaceholder.typicode.com/posts") //Returns a promise: action will complete in some time
			.then((res) => {
				//res is the response from .get(); .then() fires when .get() is completed
				this.setState({
					posts: res.data.slice(0, 4), //Data was inside the response
				});
			});
	}
	render() {
		const { posts } = this.state; //grabbing the posts property from the states
		//postList maps each post in this.state (above) and returns a jsx template for each one
		const postList = posts.length ? (
			posts.map((post) => {
				return (
					//Post card is a materliaze css class; key must be used to identify each unique post
					<div className="post card" key={post.id}>
						<img src={drones} alt="A Drone" />
						<div className="card-content">
							<span className="card-title black-text">{post.title}</span>
							<p>{post.body}</p>
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				);
			})
		) : (
			<div className="center">No Posts Yet</div>
		);
		return (
			<div className="container drone">
				<h3 className="center green-text text-accent-4">Drone News: </h3>
				{postList}
			</div>
		);
	}
}

export default Posts;
