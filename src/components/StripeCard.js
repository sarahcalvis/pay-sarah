import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
class StripePaymentForm extends React.Component {
  render() {
    return (
      <div>
        <CardElement />
      </div>
    );
  }
}

export default injectStripe(StripePaymentForm);