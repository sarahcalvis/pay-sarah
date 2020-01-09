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
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Tabs >
          <Tab label="Home" to='/' component={Link} />
          <Tab label="PayPal Donate Button" to='/paypal-donate-button' component={Link} />
          <Tab label="Stripe" to='/stripe' component={Link} />
          <Tab label="Plaid" to='/plaid' component={Link} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}