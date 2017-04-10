import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Carousel } from 'react-bootstrap';

class HotelEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.hotels.hotels === undefined) {
      return (
        <div>loading...</div>
      );
    }
    return (
      <div>
        {this.props.hotels.hotels.map(hotel => (
          <Col sm={6} md={4} key={hotel.id}>
            <div className="tile">
              <div>
                <Carousel className="flight" direction={null}>
                  {hotel.pictures.map((image, i) => (
                    <Carousel.Item className="flightimg" key={hotel.pictures[i]} >
                      <img className="flightimg" alt="" src={hotel.pictures[i]} />
                    </Carousel.Item>
                    ))}
                </Carousel>
              </div>
              <div>
                <div>
                  <div className="col-xs-10 left">
                    <span className="bold"> {hotel.neighborhood || this.props.destination.city} </span>
                    ||
                    <span> {hotel.hotel}</span>
                  </div>

                  <div className="col-xs-2 right">${hotel.price}</div>
                </div>
                <div>
                  {Array(Math.floor(hotel.rating)).fill(0).map((elem, i) =>
                    <span key={hotel.id + i} className="glyphicon glyphicon-star" />,
                  )}
                  <span className="glyphicons glyphicons-star" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </div>
    );
  }
  }


const mapStateToProps = ({ hotels, destination }) => ({
  hotels,
  destination,
});
export default connect(mapStateToProps, null)(HotelEntry);
