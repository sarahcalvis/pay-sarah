import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes.js"
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import './App.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import { Elements, StripeProvider } from 'react-stripe-elements';

class App extends React.Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_y69Z0N4wM6r6dyy6Sh4kcrWH00bivSnSRM">
        <Elements>
          <div>
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Nav />
                <Routes />
                <Footer position='fixed' left='0' bottom='0' />
              </ThemeProvider>
            </BrowserRouter>
          </div>
        </Elements>
      </StripeProvider >
    );
  }
}

export default App;
