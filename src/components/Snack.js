import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Container from '@material-ui/core/Container';
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/styles';
import styles from '../styles.js';
class Snack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.Alert = this.Alert.bind(this);

  }

  Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  handleClick() {
    this.setState({ open: true });
  };

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Snackbar
            open={this.state.open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            key={`${'bottom'},${'center'}`}>
            <this.Alert onClose={this.handleClose} severity="success">
              Payment Complete!
          </this.Alert>
          </Snackbar>
          <this.Alert severity="success">Payment Complete!</this.Alert>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Snack);