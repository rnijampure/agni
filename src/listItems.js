import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import {
  Link
} from "react-router-dom";
let width = window.innerWidth;
export const mainListItems = (

  // dont use setState in constructor, initialize state instead


  <React.Fragment>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Green Clusters" to="/dashboard/createCluster/" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard/greenClusterList/"  >
        <ListItemText primary="greenClusterList this" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/dashboard/createCluster/">
        <ListItemText primary="greenCluster Create" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Teams" />

    </ListItem>
    <ListItem button  >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link to="/dashboard/createTeam/">
        <ListItemText inset primary="Create Team" />
      </Link>
 
    </ListItem>
    <ListItem button  >
      <Link to="/dashboard/Teams/">
        <ListItemText inset primary="Team List" />
      </Link>
    </ListItem>
    <ListItem button  >
      <Link to="/dashboard/EmployeeVerification">
        <ListItemText inset primary="Employee Verification" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </React.Fragment>

);

