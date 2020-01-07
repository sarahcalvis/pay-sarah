import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes.js"
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
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
            <Nav />
            <Routes />
            <Footer position='fixed' left='0' bottom='0' />
          </ThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
