import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class EventCreate extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit( e ) {
		console.log({ e });
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12">
						<Card>
							<CardHeader>
								<strong>Create Event</strong>
							</CardHeader>
							<CardBody>
								<Form onSubmit={this.handleSubmit}>
									<Row>
										<Col xs="12">
											<FormGroup>
												<Label htmlFor="name">Event Title</Label>
												<Input type="text" id="name" placeholder="Huck" required />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col xs="12">
											<FormGroup>
												<Label htmlFor="description">Description</Label>
												<Input type="textarea" id="description" placeholder="Hucking great event!" required />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col xs="12">
											<FormGroup>
												<Label htmlFor="startDate">Start Date</Label>
												<Input type="date" id="startDate" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col xs="12">
											<FormGroup>
												<Label htmlFor="endDate">End Date</Label>
												<Input type="date" id="endDate" />
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col xs="12">
											<FormGroup>
												<Label htmlFor="tags">Tags</Label>
												<Input type="select" id="tags" multiple>
													<option>Hackathon</option>
													<option>Another Hackathon</option>
													<option>Yet Another Hackathon</option>
													<option>Bad Hackathon</option>
												</Input>
											</FormGroup>
										</Col>
									</Row>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default EventCreate;
