import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsAction';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';
import { saveSearchQuery } from '../actions/saveSearchQueryAction'
import Auth from './FacebookAuth';
import { Jumbotron } from 'react-bootstrap';
import { reset } from '../actions/resetState'
import { getBudget, resetBudget } from '../actions/budgetAction';
import { location } from 'react-router-dom'

class Destinations extends Component {

  
componentWillMount() {
  this.props.resetBudget();
  console.log(this.props.location)
  console.log('WHAT ARE THE PROPS BRUH', this.props.budget)
  if(this.props.budget.original === undefined){
    const arr = this.props.location.pathname.split('/');
    this.props.fetchDestinations({
      Budget: Number(arr[2]),
      arrivalDate: arr[3],
      departDate: arr[4]
    })
  }
}

submit = (values) => {
  this.props.getBudget(values)

  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push('/flights');
   })
}


getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {

  let funFacts = 
    ['Did you know London, England draws more international visitors than any other city on the planet?',
    'Did you know that 40 per cent of the New York subway system is above ground, and it runs 24 hours a day?',
    'San Francisco’s famous suspension bridge isn’t actually gold; its official paint colour is ‘international orange.’ Goldengatebridge.org even publicizes the colour formula used to attain this orange hue, so fans of the bridge can replicate the exact tone at home. The bridge owes its golden name to the Golden Gate Strait, the waterway it straddles, not its paint colour.',
    'Pacific Rim tourists susceptible to vertigo, be warned. Hong Kong’s skyline features more skyscrapers than New York City.',
    'If you’re referring to the tower in London’s Houses of Parliament as Big Ben, try again. According to the UK Parliament’s website, the tower is officially called the Clock Tower. Big Ben is the nickname for the clock’s bell.',
    'Don’t forget your swimsuit and snorkel; life really is a beach in Australia. The country lays claim to over 10,000 beaches – more than any other nation.',
    'Reaching triumphantly skyward over the waters of New York City’s harbour, the Statue of Liberty is one of America’s most beloved attractions. But surprisingly, this iconic American landmark began her life in Europe. Built by French sculptor Auguste Bartholdi, the Statue took nine years to complete and was shipped via boat from France to New York City in 350 individual pieces.',
    'Arizona’s steep canyon is certainly grand, but it’s not the world’s largest. Tibet’s Tsangpo Canyon actually holds the title as the planet’s biggest, deepest canyon. The Grand Canyon is the runner-up.',
    'According to the City of Niagara Falls, over 6 million cubic feet of water hurls over the top of Canada’s Horseshoe Falls every minute – enough to fill a million bathtubs to the brim in 60 seconds. But once in March 1848, the water actually stopped flowing. A temporary obstruction at the mouth of the Niagara River in Fort Erie, Ontario caused the roaring cascade of water to shrink to a quiet trickle.']

  let randomSlogan = funFacts[this.getRandomInt(0, funFacts.length)]

      if(this.props.destinations.fetched === false) {
    return (
      <Jumbotron>
      <center>
        <br></br>
        <br></br>
        <h1> DID YOU KNOW? </h1>
        <br></br>
        <h3> {randomSlogan} </h3>
        <img src='../../assets/loading.gif'></img>
        </center>
      </Jumbotron>
    
    )
  }
    return (
      <div>
        <Search onSubmit={this.submit}/>
        <Auth />
        <div className='pageFrame'>
        {/*<h1>Budget: {this.props.budget.original}</h1>*/}
        <DestinationList destinations={this.props.destinations} redirect={(url)=>{this.props.history.push(url)}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({destinations, budget}) => ({
  destinations,
  budget,
});


export default connect(mapStateToProps, { fetchDestinations, saveSearchQuery, reset, getBudget, resetBudget })(Destinations);
