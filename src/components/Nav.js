import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

export default function SimpleTabs(props) {
  const classes = useStyles();
  
  var pages = ['home', 'paypal-donate-button', 'stripe', 'plaid'];
  var page = window.location.href
  var val = 'home';
  for (var i = 0; i < pages.length; i++) {
    if (page.includes(pages[i])) { val=pages[i]; }
  }

  const [value, setValue] = React.useState(val);

  const handleTabClick = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Tabs value={value} onChange={handleTabClick} >
          <Tab value='home' label="Home" to='/' component={Link} />
          <Tab value='stripe' label="Stripe" to='/stripe' component={Link} />
          <Tab value='paypal-donate-button' label="PayPal Donate Button" to='/paypal-donate-button' component={Link} />
          <Tab value='plaid' label="Plaid" to='/plaid' component={Link} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}
