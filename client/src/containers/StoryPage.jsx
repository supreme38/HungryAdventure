import React, { Component } from 'react';
import { connect } from 'react-redux';

class StoryPage extends Component {

  render() {
    if (!this.props.hotel) {
      return (
        <div className="parallaxContainer">
          <section className="parallax">
            <h1 className="storyCity">{this.props.destination.city}</h1>
            <div className="infoContainer">
              {this.props.destination.country}
              <div >{this.props.destination.city}</div>
              <div>{this.props.destination.country}</div>
              <div>$ {this.props.destination.price}</div>
              {this.props.yelpEvents.map((event, i) => <div key={i}>{event.name}</div>)}
            </div>
            <div className="space" />
          </section>
        </div>
      );
    } else if (!this.props.events) {
      return (
        <div className="parallaxContainer">
          <section className="parallax">
            <h1 className="storyCity">{this.props.destination.city}</h1>
            <div className="infoContainer">
              {this.props.destination.country}
              <div >{this.props.destination.city}</div>
              <div>{this.props.destination.country}</div>
              <div>$ {this.props.destination.price}</div>
              <div>{this.props.hotel.hotel}</div>
              <div>$ {this.props.hotel.price}</div>
            </div>
            <div className="space" />
          </section>
        </div>
      );
    } else if (!this.props.yelpEvent && !this.props.hotel) {
      return (
        <div className="parallaxContainer">
          <section className="parallax">
            <h1 className="storyCity">{this.props.destination.city}</h1>
            <div className="infoContainer">
              {this.props.destination.country}
              <div >{this.props.destination.city}</div>
              <div>{this.props.destination.country}</div>
              <div>$ {this.props.destination.price}</div>
            </div>
            <div className="space" />
          </section>
        </div>
      );
    }


    return (
      <div className="parallaxContainer">
        <section className="parallax">
          <h1 className="storyCity">{this.props.destination.city}</h1>
          <div className="infoContainer">
            {this.props.destination.country}
            <div>$ {this.props.destination.price}</div>
            <div>{this.props.hotel.hotel}</div>
            <div>$ {this.props.hotel.price}</div>
            {this.props.yelpEvents.map((event, i) => <div key={i}>{event.name}</div>)}
          </div>
          <div className="space" />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ current }) => ({
  ...current,
});

export default connect(mapStateToProps, null)(StoryPage);
