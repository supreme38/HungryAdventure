import React from 'react';
import { Media, Col } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import Pin from './pin'
import GoogleMaps from '../containers/GoogleMaps'

const Event = ({ event }) => (
  <div className="eventContainer">
    <Media>
      <Col xs={12} md={8}>
          <Media.Left >
            <img width={84} height={84} src={event.image_url} />
          </Media.Left>
          <Media.Body>
            <h4><a href={event.url}>{event.name}</a></h4>
            <StarRatingComponent
                name="rating"
                editing={false}
                starCount={5}
                value={event.rating}
                />
            <div>{event.categories[0].title}</div>
          </Media.Body>
      </Col>
      <Col xs={6} md={4}>
        <div>{event.location.city}</div>
        <div>{event.location.display_address[0]}</div>
      </Col>
    </Media>
    <hr></hr>
  </div>
)

export default Event;
