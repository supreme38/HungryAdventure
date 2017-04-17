import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDestinations } from '../actions/destinationsAction';
import DestinationList from '../components/DestinationList';
import Search from './searchForm';
import { saveSearchQuery } from '../actions/saveSearchQueryAction'
import Auth from './FacebookAuth';
import { Jumbotron } from 'react-bootstrap';
import { reset } from '../actions/resetState'
import { getBudget, resetBudget } from '../actions/budgetAction'


class Destinations extends Component {

  
componentWillMount() {
  this.props.resetBudget();

  if (window.location.search){

  var queryString = window.location.search;
  queryString = queryString.substring(1);

  var parseQueryString = function( q ) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = q.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

let queryObj = {
  Budget: parseQueryString(queryString).Budget,
  departDate: new Date ((parseQueryString(queryString).departDate).replace(/%20/g, " ")),
  arrivalDate: new Date ((parseQueryString(queryString).arrivalDate).replace(/%20/g, " ")),
}

this.props.getBudget(queryObj)
this.props.fetchDestinations(queryObj);

}
  

}

submit = (values) => {
  
  this.props.getBudget(values)
  this.props.fetchDestinations(values).then(() =>{
     this.props.history.push(`/flights?Budget=${values.Budget}&departDate=${values.departDate}&arrivalDate=${values.arrivalDate}`);
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
    return ( <div>
  <Search onSubmit={this.submit}/>
        <Auth />
    <section id="banner">
        <h2>Hungry Adventure</h2>
        <p>Lets go on an adventure</p>
    </section>
<section className="customContainer">
        <DestinationList destinations={this.props.destinations} redirect={(url)=>{this.props.history.push(url)}}/>
</section>


</div>
    );
  }
}

const mapStateToProps = ({destinations, budget}) => ({
  destinations,
  budget,
});


export default connect(mapStateToProps, { fetchDestinations, saveSearchQuery, reset, getBudget, resetBudget })(Destinations);

