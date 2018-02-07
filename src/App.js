import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Roots from './roots.js';
import './App.css';


import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
const store = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>

          <Router >
            {Roots}
          </Router>
        </MuiThemeProvider>

      </Provider>
    );
  }
}


export default App;