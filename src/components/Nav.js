import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  appBar: {
    position: 'sticky',
    flexWrap: 'wrap',

  },
  tabs: {
  },
  tab: {
  },
  loginTab: {
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar} title="WSAJ">
        <Tabs className={classes.tabs}>
          <Tab className={classes.tab} label="Home" to='/' component={Link} />
          <Tab className={classes.tab} label="PayPal Donate Button" to='/paypal-donate-button' component={Link} />
          <Tab className={classes.tab} label="Stripe" to='/stripe' component={Link} />
          <Tab className={classes.tab} label="Plaid" to='/plaid' component={Link} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}