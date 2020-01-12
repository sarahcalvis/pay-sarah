import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snack from './Snack.js';
import TextField from '@material-ui/core/TextField';
class StripePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      open: false,
      amount: 0
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    var i = parseInt(this.state.amount) * 100;
    console.log(i);
    /// payment request
    let { token } = await this.props.stripe.createToken({ name: "Jenny"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id + ' amount: ' + i,
    });

    if (response.ok) { console.log(response) }
    if (response.ok) this.setState({ complete: true });
  }


  render() {
    if (this.state.complete) {
      return (
        <Snack />
      )
    }
    else return (
      <div className="checkout">
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          paragraph>
          Enter your payment information below to complete the purchase. Not working? Start the server 😉
        </Typography>

        <CardElement data-amount={this.state.amount} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <TextField
            value={this.state.amount}
            onInput={e => this.setState({ amount: e.target.value })}
            id="outlined-basic"
            label="Donation Amount"
            variant="outlined" />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button
            color="primary"
            variant="contained"
            size="large"
            align="center"
            aria-label="outlined primary button group"
            type="submit"
            onClick={this.submit}>
            Purchase
            </Button>
        </Grid>
      </div>
    );
  }
}

export default injectStripe(StripePaymentForm);