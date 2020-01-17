// https://stripe.com/docs/recipes/elements-react

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Text from '../components/Text.js';
import Snack from '../components/Snack.js';
import {
  CardElement,
  injectStripe
} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import styles from '../styles.js';

class Stripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: ''
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let i = parseInt(this.state.amount) * 100;
    console.log(i);
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
          <Text type="heading" text="Stripe" />
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
        </Container>
        {this.state.complete ?
          <Snack /> :
          <React.Fragment>
            <main className={classes.layout}>
              <Paper elevation={3} className={classes.paper}>
                <Text type="card-heading" text="Make a Donation" />
                <React.Fragment>
                  <React.Fragment>
                    <CardElement className={classes.stripeElement} />
                    <input
                      className={classes.stripeElement}
                      value={this.state.amount}
                      placeholder="Amount"
                      onInput={e => this.setState({ amount: e.target.value })} />
                    <Button
                      color="primary"
                      className={classes.button}
                      variant="contained"
                      onClick={this.submit}>
                      Donate
                    </Button>
                  </React.Fragment>
                </React.Fragment>
              </Paper>
            </main>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default injectStripe(withStyles(styles)(Stripe));