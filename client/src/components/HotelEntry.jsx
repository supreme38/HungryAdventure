import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import { currentHotel } from '../actions/currentStateAction';
import { hotelBudget } from '../actions/budgetAction';
import { hotelImage } from '../actions/budgetBarAction';
import { toggleHotels, toggleSelect } from '../actions/toggleAction';

class HotelEntry extends Component {
  constructor(props) {
    super(props);
  }

  add = (hotel, props) => {
    this.props.currentHotel({ hotel });
    this.props.hotelBudget({
      hotel: hotel.price,
      budget: props.budget,
      arrivalDate: props.destination.arrivalDate,
      departureDate: props.destination.departureDate,
      });
    this.props.hotelImage({ hotel: hotel.pictures[0] });
  }

  toggle = ({ hotels }) => {
    this.props.toggleHotels({ hotels })
  }
  select = (hotel, toggle) => {
    this.props.toggleSelect({ hotel, select: toggle.select })
  }
  clickHotel = (hotel, props) => {
    this.add(hotel, props);
    this.select(hotel, props.toggle);
  }

  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        <div className='container'>
        <h1 className="title">Hotels</h1>
        <Button onClick={()=> this.toggle(this.props.toggle)} bsStyle="custom" style={{ float: "right" }}>See More...</Button>
        <div className="container"></div>
        {this.props.hotels.hotels.map((hotel, index) => (
          <Col md={4}
            key={hotel.id}
            className={
              "pad"
              + ((index >= 3 && !this.props.toggle.hotels) ? " none" : "")
              + ((this.props.toggle.select === hotel.id)? " select" : "")
            }
            onClick={()=> {  this.clickHotel(hotel, this.props) }}
          >
            <div className="event-card hotel">
              <img className="customImg" alt="" src={hotel.pictures[0]} />
              <div className='card-text'>
                <div className='portfolio-box-caption-content'>
                  <div className="project-category text-faded">
                    {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                      <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                    )}
                    <span className="glyphicons glyphicons-star" />
                  </div>
                  <div className='project-name'>
                    ${hotel.price}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </div>
      </div>
    );
  }
  }

const mapStateToProps = ({ hotels, destination, budget, toggle }) => ({
  hotels,
  destination,
  budget,
  toggle,
});
export default connect(mapStateToProps, { currentHotel, hotelBudget, hotelImage, toggleHotels, toggleSelect })(HotelEntry);
