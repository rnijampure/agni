import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';import {
   Router,
  Switch,
  Route,  withRouter, 
} from "react-router-dom"; 

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { createBrowserHistory as createHistory } from 'history'
import 'typeface-roboto';
import SignIn from './SignIn';
import dashboard from './dashboard';
require('typeface-roboto');

const theme = createMuiTheme({
 
    "palette": {
      "common": {
        "black": "#000",
        "white": "#fff"
      },
      "background": {
        "paper": "#fff",
        "default": "#fafafa"
      },
      "primary": {
        "light": "#7986cb",
        "main": "rgba(58, 110, 255, 1)",
        "dark": "rgba(34, 72, 177, 1)",
        "contrastText": "#fff"
      },
      "secondary": {
        "light": "#ff4081",
        "main": "rgba(36, 153, 139, 1)",
        "dark": "rgba(26, 134, 121, 1)",
        "contrastText": "#fff"
      },
      "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
      },
      "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
      }
    },
    typography: {
      fontWeight:'400',
        fontFamily:'Roboto',
      button: {
        fontSize: '14px',
        fontFamily:'Roboto',

      },
      h1:{
        fontWeight:"normal",
        fontSize: '24px',
    fontWeight: '400',
      },
      span:{
        fontSize: '12px'
      }
    }
});
const history = createHistory()
 
const routing = (
  <MuiThemeProvider theme={theme}>
    <Router   history={history}> 
  <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route path="/dashboard" component ={withRouter(dashboard)} >
         
          </Route> 
        </Switch>
      
    </Router>
    </MuiThemeProvider>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA    //  <Route path="/" component ={SignIn} />
serviceWorker.unregister();
