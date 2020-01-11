import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
});
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
      </div>
    )
  }
}

export default withStyles(styles)(Snack);