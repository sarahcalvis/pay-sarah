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
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
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
        </Container>
        {this.state.complete ?
          <Snack /> :
          <React.Fragment>
            <main className={classes.layout}>
              <Paper elevation={3} className={classes.paper}>
                <Text type="card-heading" text="Make a Donation" />
                <React.Fragment>
                  <React.Fragment>
                    <CardElement />
                    <React.Fragment>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <TextField
                            value={this.state.amount}
                            onInput={e => this.setState({ amount: e.target.value })}
                            id="outlined-basic"
                            label="Donation Amount" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField required id="cardNumber" label="Card number" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField required id="expDate" label="Expiry date" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            id="cvv"
                            label="CVV"
                            helperText="Last three digits on signature strip"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                    <div className={classes.buttons}>
                      <Button color="primary" className={classes.button} variant="contained" onClick={this.submit}>
                        Donate
                        </Button>
                    </div>
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