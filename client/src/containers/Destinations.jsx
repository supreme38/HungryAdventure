import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsAction';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';
import { saveSearchQuery } from '../actions/saveSearchQueryAction'


class Destinations extends Component {

submit = (values) => {
  
  console.log ('+===VALUES within Destinations', values)
  
  let saveQueryObj = {
    email: this.props.email || 'none',
    budget: values.budget,
    startDate: values.startDate,
    endDate: values.endDate,
  }

  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })
}
  render() {
    return (
      <div>
        <Search onSubmit={this.submit}/>
        <h1 className="title"> Hungry Adventure </h1>
        <h1>Budget: {this.props.budget.original}</h1>
        <DestinationList destinations={this.props.destinations} redirect={(url)=>{this.props.history.push(url)}}/>
      </div>
    );
  }
}

const mapStateToProps = ({destinations, budget}) => ({
  destinations,
  budget,
});

export default connect(mapStateToProps, {fetchDestinations, saveSearchQuery })(Destinations);
