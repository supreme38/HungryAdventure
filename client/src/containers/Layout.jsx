import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchDestinations } from '../actions/destinationsAction';
import { getBudget } from '../actions/budgetAction';
import { PageHeader } from 'react-bootstrap';
import { AppBar, AppBarMenu, FlatButton } from 'material-ui';
//Reducer for react inputs
import { combineReducers } from 'redux';
//Imported Component
import Search from './searchForm';
import Auth from './FacebookAuth'

class Layout extends React.Component {

  // static propTypes = {
  //     destinations: PropTypes.array,
  //   }

  submit = (values) => {
    this.props.getBudget(values);
    this.props.fetchDestinations(values).then(() =>{
       this.props.history.push('/flights');
     })
  }

  render () {
     return (
      <div className='overlay'>
        <AppBar

          titleStyle={{ fontFamily: "'Quicksand', sans-serif"}}
          style={{ backgroundColor: "#438496" }}
          showMenuIconButton={false}
          title="Hungry Adventure"  />
        <center>
          <div style={{ marginTop: '10%' }}>
            <Search onSubmit={this.submit} />
            <Auth />
          </div>
        </center>
      </div>
    );
  }
}

//Connects to store
const mapStateToProps = ({destinations, budget}) => ({
 destinations: destinations.destinations,
 budget,
})

export default connect(mapStateToProps, { fetchDestinations, getBudget })(Layout);

