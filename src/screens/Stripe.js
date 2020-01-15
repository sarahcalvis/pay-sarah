// https://stripe.com/docs/recipes/elements-react

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import Text from '../components/Text.js';
import Grid from '@material-ui/core/Grid';
import Snack from '../components/Snack.js';
import TextField from '@material-ui/core/TextField';
import {
  CardElement,
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
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: '10px 0 20px 0',
  },
  stripeElement: {
    display: 'block',
    margin: '10px 0 20px 0',
    width: '100%',
    //maxWidth: '500px',
    padding: '10px 14px',
    fontSize: '1em',
    fontFamily: 'Roboto',
    boxShadow: 'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
    border: "0",
    outline: '0',
    borderRadius: '4px',
    background: 'white',
  }
});

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
    var i = parseInt(this.state.amount) * 100;
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