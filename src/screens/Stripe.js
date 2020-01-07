import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
    position: 'relative',
    margin: '0',
    //padding-bottom: 6rem;
    height: '100%',
    paddingBottom: "60px",
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Pay Sarah Via Stripe
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Work in progress. Honestly they are asking for a lot of info and I stopped because I am not a real business. Trying Plaid now.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
