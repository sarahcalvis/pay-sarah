// https://stripe.com/docs/recipes/elements-react

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';
import Text from '../components/Text.js';
import Snack from '../components/Snack.js';
import {
  CardElement,
  injectStripe
} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import styles from '../styles.js';

const useStyles = makeStyles(styles);

function Stripe(props) {
  const classes = useStyles();

  const [complete, setComplete] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [description] = React.useState('sample description- replace with grant name later')

  async function submit(ev) {
    let i = parseInt(amount) * 100;
    console.log(i);
    /// payment request
    let { token } = await props.stripe.createToken({ name: "Giving Tree Donor" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id + ' amount: ' + i + ' description: ' + description,
    });

    if (response.ok) { console.log(response) }
    if (response.ok) setComplete(true);
  }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Text type="heading" text="Stripe" />
        <Text type="subheading" text="Enter your payment information below to complete the purchase. Not working? Start the server 😉" />
      </Container>
      {complete ?
        <Snack /> :
        <React.Fragment>
          <main className={classes.layout}>
            <Paper elevation={3} className={classes.paper}>
              <Text type="card-heading" text="Make a Donation" />
              <Typography
                component="h1"
                color="textSecondary"
                variant="subtitle1">
                Refer to <Link color="secondary" href="https://stripe.com/docs/testing" > Stripe testing information</Link> to try this out
                </Typography>
              <React.Fragment>
                <React.Fragment>
                  <CardElement className={classes.stripeElement} />
                  <input
                    className={classes.stripeElement}
                    value={amount}
                    placeholder="Amount"
                    onInput={e => setAmount(e.target.value)} />
                  <Button
                    color="primary"
                    className={classes.button}
                    variant="contained"
                    onClick={submit}>
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

export default injectStripe(Stripe);