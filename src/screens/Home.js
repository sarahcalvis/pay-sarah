import React from 'react';
import Container from '@material-ui/core/Container';
import Text from '../components/Text.js';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    position: 'relative',
    margin: '0',
    //padding-bottom: 6rem;
    height: '100%',
    paddingBottom: "60px",
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Text type="heading" text="Pay Sarah" />
          <Text type="subheading" text="Sarah's payment processing experiment." />
          <Text type="heading" text="The Conclusion (At the top because it's important)" />
          <Text type="subheading" text="Stripe works! I'm leaving my PayPal and Plaid fun in there for posterity." />
          <Text type="heading" text="The fundamental challenge" />
          <Text type="subheading" text="We need to not just accept payments, but also 1. allow CFs to input payment information. 2. potentially create multiple accounts for one CF. 3. track and manage the size of the payments." />       
          <Text type="heading" text="What I am learning about the solution to said challenge" />
          <Text type="subheading" text="We should probably take the amount the user wants to donate BEFORE beginning the payment processing routine so we can validate it ourselves and store the donation amount to the database upon transaction completion. I think this can be done pretty easily."/>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
