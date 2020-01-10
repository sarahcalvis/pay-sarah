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
class Nav extends React.Component {
  constructor(props) {
    super();
    
    var initialPage = localStorage.getItem( 'selectedTab' ) || 'home';

    this.state = {
      selectedTab: initialPage
    }
  }

  componentWillUnmount() {
    localStorage.setItem( 'selectedTab', 'home' );
  }
  

  handleTabClick = (event, value) => {
    localStorage.setItem( 'selectedTab', value );
    this.setState({ selectedTab: value });
  }


  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar className={classes.appBar}>
          <Tabs value={this.state.selectedTab} onChange={this.handleTabClick} >
            <Tab value='home'  label="Home" to='/' component={Link} />
            <Tab value='paypal-donate-button' label="PayPal Donate Button" to='/paypal-donate-button' component={Link} />
            <Tab value='stripe' label="Stripe" to='/stripe' component={Link} />
            <Tab value='plaid' label="Plaid" to='/plaid' component={Link} />
          </Tabs>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Nav);
