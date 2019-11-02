import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
// import { useParams } from 'react-router-dom';

class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
            <CardHeader>Event {this.props.match.params.id}</CardHeader>
            <CardBody>Event details and links</CardBody>
        </Card>
      </div>
    );
  }
}

export default EventDetails;
