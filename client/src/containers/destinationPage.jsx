import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMaps from './GoogleMaps';
import HotelList from '../components/HotelList';
// +++++ Imported Components
import Weather2 from '../components/weather'
import { Link } from 'react-router-dom';

// +++++ Imported Components


class destinationPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const heroImage = this.props.destination.imageUrl[0];

    return (<div>
      <div><Link to="/events">EVENTS</Link></div>
      <h1> Hungry Adventure </h1>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }} />
      <GoogleMaps locator={this.props.geo.locator} />
      <h1> current budget: ${this.props.budget.flight}</h1>
      <h1> {this.props.destination.city}</h1>
      <h1> {this.props.destination.country}</h1>
      <h1>$ {this.props.destination.price}</h1>
      <Weather2 sunny={this.props.geo.locator} arrival={this.props.destination.arrivalDate} />
      {/* < HEADERIMG />*/}
      {/* < INFO Component />*/}
      {/* < Weather Component />*/}
      <HotelList hotels={this.props.hotels} destination={this.props.destination} />
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, null)(destinationPage);
