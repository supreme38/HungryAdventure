import React from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import queryDB from '../actions/facebookAction'
//process.env.FB_CLIENT_ID

//Imported Component
import Search from './searchForm';
import FacebookLogin, {componentClicked} from 'react-facebook-login';

class FacebookAuth extends React.Component {

  constructor (props){
    super(props);
  }

  componentWillMount () {

  //Load Facebook SDK
    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1889680274620799";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

responseFacebook = (response) => {
  console.log('++++++++',response);
  this.props.queryDB(response);

}

  render () {
    if(this.props.fbpicture === undefined){
      return <FacebookLogin
       appId='process.env.FB_CLIENT_ID'
       autoLoad={true}
       fields="name,email,picture"
       onClick={componentClicked}
       callback={this.responseFacebook}
       icon="fa-facebook" />
    } else {
     return (<div>
      <h1>Hi ! {this.props.name}</h1>
       <img src={this.props.fbpicture}></img>
       </div>
     );
   }
  }
}

//Connects to store
const mapStateToProps = ({profile}) => ({
...profile
});

export default connect(mapStateToProps, {queryDB})(FacebookAuth);
