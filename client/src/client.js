import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // wrap react-redux with provider
// material-ui //
import { MuiThemeProvider } from 'material-ui/styles';

import store from './store';
import Routes from './Routes';


const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>
</Provider>, app);
