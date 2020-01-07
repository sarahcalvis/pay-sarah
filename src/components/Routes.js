import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from '../screens/Home.js';
import Stripe from '../screens/Stripe.js';
import Plaid from '../screens/Plaid.js';
import PayPalDonateButton from '../screens/PayPalDonateButton.js'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/paypal-donate-button" component={PayPalDonateButton} />
                <Route exact path="/stripe" component={Stripe} />
                <Route exact path="/plaid" component={Plaid} />
                {/*<Route component={NotFound} />*/}
            </Switch>
        )
    }
}

export default Routes;