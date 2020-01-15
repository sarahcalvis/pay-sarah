// https://stripe.com/docs/recipes/elements-react

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Text from '../components/Text.js';
import Snack from '../components/Snack.js';
import TextField from '@material-ui/core/TextField';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
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

class Stripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: 0
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    var i = parseInt(this.state.amount) * 100;
    /// payment request
    let { token } = await this.props.stripe.createToken({ name: "Giving Tree Donor" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id + ' amount: ' + i,
    });

    if (response.ok) { console.log(response) }
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Text type="heading" text="Pay Sarah Via Stripe" />
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Refer to
            <Link href="https://stripe.com/docs/testing" >
              Stripe Testing Information
            </Link>
            to try this out
          </Typography>
          <Text type="subheading" text="please how do I make spaces between the link and the words help me" />
          <Text type="subheading" text="Enter your payment information below to complete the purchase. Not working? Start the server 😉" />
          {this.state.complete ?
            <Snack /> :
            <div>
              <Paper elevation={3} border={3}
              direction="column"
  justify="flex-start"
  alignItems="flex-start">
                <Text type="card-heading" text="Make a Donation" />
                <TextField
                  value={this.state.amount}
                  onInput={e => this.setState({ amount: e.target.value })}
                  id="outlined-basic"
                  label="Donation Amount" />
                <Text type="card-labels" text="Card Number"/>
                <CardNumberElement />
                <Text type="card-labels" text="Expiration date" />
                <CardExpiryElement />
                <Text type="card-labels" text="CVC" />
                <CardCvcElement />
                <Button color="primary" variant="contained" size="large" type="submit" onClick={this.submit}>
                  Donate
                </Button>
              </Paper>
            </div>
          }
        </Container>
      </div>
    );
  }
}

export default injectStripe(withStyles(styles)(Stripe));