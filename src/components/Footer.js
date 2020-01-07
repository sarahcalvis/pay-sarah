import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    position: 'relative',
    textAlign: "center",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Not-Yet-Sticky Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Disclaimer: I have not tried this because I am terrified they will slap me with a bunch of fees.
        </Typography>
      </footer>  
    );
  }
}

export default withStyles(styles)(Home);
