import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import   FormDialog from './createGreenClustersDialog'
import TeamListLargeSreen from './teamList'
import TeamListSmallScreen from './TeamListSmallScreen.js'

export default class TeamListMain extends Component  {
  render() {
        let width = window.innerWidth;  
    if (width > 768) {
      return (
       <TeamListLargeSreen></TeamListLargeSreen>
       
       );
    } else {
      return ( 
    <TeamListSmallScreen></TeamListSmallScreen>
      );
    }
 }
 
}
