import React, { Component } from 'react';
import { getGoogleData } from '../actions/userLocationAction'
import { connect } from 'react-redux';

class UserLocationTrigger extends Component {
  constructor(props) {
    super(props);
  }

  getLocation = () => {
      let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      let crd = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options)

  }

  render() {
    console.log('SEARCH',this.props)
    return (

      <div>
        <div>This button will eventually be user geolocation</div>
        <button onClick={()=> {this.getLocation()} }>BUTTON</button>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, getGoogleData)(UserLocationTrigger)
