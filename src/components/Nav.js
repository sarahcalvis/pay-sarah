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


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabClick = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Tabs value={value} onChange={handleTabClick} >
          <Tab value='home' label="Home" to='/' component={Link} />
          <Tab value='paypal-donate-button' label="PayPal Donate Button" to='/paypal-donate-button' component={Link} />
          <Tab value='stripe' label="Stripe" to='/stripe' component={Link} />
          <Tab value='plaid' label="Plaid" to='/plaid' component={Link} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}
