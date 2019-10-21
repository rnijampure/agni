import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Tooltip from '@material-ui/core/Tooltip';

import EmployeeVerificationDialog from './verifyEmployeeDialog'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  rootOne: {
    flexGrow: 1,
    margin: theme.spacing(0),
    background: 'none',
    padding:'0',
    '& div': {
      background: 'none',
      boxShadow: 'none',

    }

  },
  rootHeading: {
    flexGrow: 1,
    margin: theme.spacing(2),
    background: 'none',
    '& div': {
      background: 'none',
      boxShadow: 'none',
      textAlign: 'left'
    }

  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  textAlignLeft: {
    textAlign: 'left', padding: theme.spacing(2),
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black'
  },
  textAlignRight: {
    textAlign: 'right', padding: theme.spacing(2),

    color: theme.palette.text.secondary,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#B5B5B5!important',
    '&:hover': {
      backgroundColor: '#E5E5E5 !important',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      maxWidth: '300px',
      float: 'right'
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
  },
  alignLeft: {
    textAlign: 'left',
    boxShadow: 'none'
  },
  WrappedListItem: {
    flex: '0 0 53%'
  },
  flexWrapParent: {
    flexWrap: 'wrap',
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    width: '100%',
    "& :first-of-type ": {
      "& span": {
        fontWeight: '700',

      },
      "&:hover": {
        button: {
          display: 'block'
        },
      }
    }
  },
  WrappedListItemTop: {
    fontWeight: '700',
    color: '#262626',
    flex: '0 0 53%'
  },
}));
const handleClickOpen = () => {


};

export default function EmployeeVerification() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.rootOne}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.textAlignLeft}>Employee Verifcation</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.textAlignRight}>

              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search By Employee Id"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>

            </Paper>
          </Grid>

        </Grid>

      </div>
      <div>
        <Grid container spacing={3} className={classes.rootHeading}>
          <Grid item xs>
            <Paper className={classes.paper}>Feeder</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Driver</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Others</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>
            <Tooltip title="Verify and Add" aria-label="add">
              <List component="nav" className={classes.rootOne} aria-label="mailbox folders"  onClick={handleClickOpen}>
                <ListItem button className={classes.flexWrapParent} >

                  <ListItemText primary="Indranagar" className={classes.WrappedListItemTop} />
                  <ListItemText primary="1st Block" className={classes.WrappedListItem} />
                </ListItem>
              </List>
              </Tooltip>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>    <ListItem className={classes.flexWrapParent} >

              <ListItemText primary="Indranagar" className={classes.WrappedListItemTop} />
              <ListItemText primary="1st Block" className={classes.WrappedListItem} />
            </ListItem></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <ListItem className={classes.flexWrapParent} >

                <ListItemText primary="Indranagar" className={classes.WrappedListItemTop} />
                <ListItemText primary="1st Block" className={classes.WrappedListItem} />
              </ListItem>
              <ListItem className={classes.flexWrapParent} >
                <Button variant="contained" color="primary" className={classes.button}>
                  VERIFY
      </Button>
              </ListItem>

            </Paper>
          </Grid>
        </Grid>

      </div>
    </React.Fragment>
  );
}
