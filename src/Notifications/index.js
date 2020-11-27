//index.js of the Notifications folder allows us to send a user a notification when information is entered incorrectly

import React from "react";
import styled from "styled-components"; //"styled-components" helps style the notification
import ee from "event-emitter"; //"event-emitter" helps create a notification function that can be called anywhere in the project

const Container = styled.div`
    background-color: #444;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${(props) => props.top}px;
    left: 2000px:;
    z-index:999;
    transition: top 0.5s ease;
`;

const emitter = new ee();

export const notify = (msg) => {
	emitter.emit("notification", msg);
};

export default class Notifications extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			top: -100,
			msg: "",
		};

		this.timeout = null;

		emitter.on("notification", (msg) => {
			this.onShow(msg);
		});
	}

	onShow = (msg) => {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.setState({ top: -100 }, () => {
				this.timeout = setTimeout(() => {
					this.showNotification(msg);
				}, 500);
			});
		} else {
			this.showNotification(msg);
		}
	};
	showNotification = (msg) => {
		this.setState(
			{
				top: 16,
				msg,
			},
			() => {
				this.timeout = setTimeout(() => {
					this.setState({
						top: -100,
					});
				}, 3000);
			}
		);
	};

	render() {
		return (
			<Container top={this.state.top}>
				Error! Location Previously Entered
			</Container>
		);
	}
}
