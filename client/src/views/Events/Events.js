import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Events extends Component {
	events() {
		return [
			{ id: "blah", title: 'Hackathon #1', text: 'Best Hackathon Ever!' },
			{ id: "blah2", title: 'Hackathon #2', text: 'Worst Hackathon Ever!' }
		]
	}

	render() {
		return (
			<div className="animated fadeIn">
				<ListGroup>
					{this.events().map(e =>
						(<ListGroupItem>
							<ListGroupItemHeading>
								<Link to={`/event/${e.id}`}>{e.title}</Link>
							</ListGroupItemHeading>
							<ListGroupItemText>{e.text}</ListGroupItemText>
						</ListGroupItem>)
					)}
				</ListGroup>
			</div>
		);
	}
}

export default Events;
