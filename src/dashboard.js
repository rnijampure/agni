import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'; 
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import  { mainListItems}     from './listItems';
import GreenCluster from './innerPages/GreenCluster/createGreenClusters'; 
import ListDividers from './innerPages/GreenCluster/greenClusterList'; 
import ListDividerSS from './innerPages/GreenCluster/greenClusterListSmallSCreen'; 
import CreateTeam from './innerPages/team/createTeam'; 
import TeamListMain from './innerPages/team/teamListMain'; 
import EmployeeVerification from './innerPages/team/EmployeeVerification'; 
import {
  Router, 
  Route,   Switch ,withRouter 
} from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor:'#f5f5f5'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
 
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
      width: '0',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    },
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems:"stretch"
    
  },
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
  },
  heightMax: {
    display: 'flex',
    flex: '1',
    height: '87%'
  },
  fixedHeight: {
    height: '100%',alignItems:"stretch"
  },
  h1:{
fontWeight:"normal"
  },
   typography: {
      button: {
        fontSize: '14px',
        fontFamily:'Roboto',

      },
      h1:{
        fontWeight:"normal",
        fontSize: '24px',
    fontWeight: '400',
      }
    }
}));
const routes = [
  {
    id: "1",
    path: "/dashboard/createCluster/",
    exact: true,
    sidebar:  GreenCluster , 
  },
  {
    id: "2",
    path: "/dashboard/greenClusterList/",
    exact: true,
    sidebar:  ListDividers , 
  }, 
  {
    id: "3",
    path: "/dashboard/greenClusterListSS/",
    exact: true,
    sidebar:  ListDividerSS , 
  } 
  , 
  {
    id: "3",
    path: "/dashboard/createTeam/",
    exact: true,
    sidebar:  CreateTeam , 
  },
  {
    id: "3",
    path: "/dashboard/Teams/",
    exact: true,
    sidebar:  TeamListMain , 
  }, {
    id: "3",
    path: "/dashboard/EmployeeVerification/",
    exact: true,
    sidebar:  EmployeeVerification , 
  },
];

export default withRouter(
  function Dashboard({ history } ) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List> {  mainListItems  }</List>
        <Divider /> 
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container , classes.heightMax}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}> 
              <Switch>
              {routes.map((route, index,history) => (
                 //      <List><MainListItems></MainListItems></List>
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact} 
                component ={route.sidebar}
                history={history}
              />
            ))}
        </Switch> 
            </Grid>
         
          </Grid>
        </Container> 
      </main>
    </div>
  );
}
)
