import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snack from './Snack.js';

class StripePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      open: false
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
    else { console.log(response) }
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
          Enter your payment information below to complete the purchase
        </Typography>
        <CardElement />
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