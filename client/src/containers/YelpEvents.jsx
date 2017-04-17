import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentEvents } from '../actions/currentStateAction';
import { yelpBudget } from '../actions/budgetAction';
import { eventsImage } from '../actions/budgetBarAction';
import { Col, Button } from 'react-bootstrap';


class YelpEvents extends Component {
  constructor(props) {
    super(props)
        this.state = {
      show: " hide",
      flag: true
    }
  }

  add = (event) => {
    this.props.currentEvents({event: event});
    this.props.eventsImage({ events: event.image_url })
    setTimeout(() => {
      this.props.yelpBudget(this.props.current)
    }, 1000)
  }

  expand = () => {
    if (this.state.flag) {
      this.setState({show: ""});
      this.setState({flag: false});
    } else if (!this.state.flag) {
      this.setState({show: " hide"});
      this.setState({flag: true});
    }
  }

  render() {
    if (this.props.yelp.events === undefined) {
      return (
        <div>No Yelp Events</div>
      );
    }
    return (
      <div className="eventsContainer">
        <div>
          <span><Button onClick={() => this.expand()}>See More...</Button></span>
        </div>
        {this.props.yelp.events.map((event, index) => (
          <Col sm={6} md={3} key={index} className={"eventContainer" + ((index > 3) ? this.state.show : "")}>
          <img className="eventImg" src={event.image_url} onClick={() => this.add(event)}/>
          <div>
          <span className="price">${event.price}</span>
          <a href={event.url}>{event.name}</a>
          </div>
        </Col>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps, { currentEvents, yelpBudget, eventsImage })(YelpEvents);
