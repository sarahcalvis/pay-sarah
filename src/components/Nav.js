import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    margin: theme.spacing(0, 0, 0),
  },
  appBar: {
    position: 'sticky',
    flexWrap: 'wrap',

  },
});
class Nav extends Component {
  state = {
    selectedTab: 'shop-setup'
  }

  handleTabClick = (event, value) => {
    this.setState({ selectedTab: value });
  }
  render() {
    const { classes } = this.props;
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
}

export default withStyles(styles)(Nav);
