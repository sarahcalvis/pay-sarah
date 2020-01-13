import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snack from './Snack.js';
class StripePaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      open: false,
      amount: props.amount
    };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    var i = parseInt(this.state.amount) * 100;
    /// payment request
    let { token } = await this.props.stripe.createToken({ name: "Giving Tree Donor"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id + ' amount: ' + i,
    });

    if (response.ok) { console.log(response) }
    if (response.ok) this.setState({ complete: true });
  }

  componentDidUpdate(prevProps) {
    if(this.state.amount !== prevProps.amount) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState({amount: this.props.amount});
    }
  } 


  render() {
    if (this.state.complete) {
      return (
        <Snack />
      )
    }
    else return (
      <div className="checkout">
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