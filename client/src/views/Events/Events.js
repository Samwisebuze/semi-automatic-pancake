import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Events extends Component {
	events() {
		return [
			{ title: 'Hackathon #1', text: 'Best Hackathon Ever!' },
			{ title: 'Hackathon #2', text: 'Worst Hackathon Ever!' }
		]
	}
  render() {
    return (
      <div className="animated fadeIn">
        <ListGroup>
					{ this.events().map( e=> 
							(<ListGroupItem>
								<ListGroupItemHeading>{e.title}</ListGroupItemHeading>
								<ListGroupItemText>{e.text}</ListGroupItemText>
							</ListGroupItem>)
						)
					}
				</ListGroup>
      </div>
    );
  }
}

export default Events;
