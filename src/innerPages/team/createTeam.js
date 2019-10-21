import React from 'react'  
import TeamDialog  from './createTeamDialog'  ;

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
 
  centerAlignedContent:{
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    minHeight: '88vh',
    textAlign:'center',
    "h1#{&}":{
      fontWeight:"normal",
      fontSize: '24px',
  fontWeight: '400',
    }
  }
}));
  export default function  CreateTeam() { 
    const classes = useStyles();

    return (
        <div   className={classes.centerAlignedContent} >
       
          <h1>
            Team
        </h1> 
        <TeamDialog/> 
        </div>
       
      )
 
  }
  
