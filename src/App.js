import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './screens/Home.js';
import Footer from './components/Footer.js';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid>
              <Grid item>
                <Home />
              </Grid>
              <Grid item
                container
                direction="row"
                justify="center"
                alignItems="flex-end">
                <Footer position='fixed' left='0' bottom='0'/>
              </Grid>
            </Grid>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
