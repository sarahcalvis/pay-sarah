import React from 'react';
import Typography from '@material-ui/core/Typography';
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
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Sarah's payment processing experiment.
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            The Conclusion (At the top because it's important)
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Stripe works! I'm leaving my PayPal and Plaid fun in there for posterity.
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            The fundamental challenge
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            We need to not just accept payments, but also 1. allow CFs to input payment information. 2. potentially create multiple accounts for one CF. 3. track and manage the size of the payments.
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            What I am learning about the solution to said challenge
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            We should probably take the amount the user wants to donate BEFORE beginning the payment processing routine so we can validate it ourselves and store the donation amount to the database upon transaction completion. I think this can be done pretty easily.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
