import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

export default function SimpleTabs(props) {
  const classes = useStyles();
  
  // This is a pretty jank way to determine the initial page. Maybe I should be doing it using local storage?
  const pages = ['home', 'paypal-donate-button', 'stripe', 'plaid']; //list options for current page
  const page = window.location.href; //get URL
  let val = 'home'; //default url is 'home'
  for (let p of pages) { //iterate through possible pages
    if (page.includes(p)) val=p; //if the URL contains the page name, set the state to that page
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
