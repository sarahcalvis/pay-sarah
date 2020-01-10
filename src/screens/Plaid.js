import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PlaidLink from 'react-plaid-link'

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

class Plaid extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleOnSuccess(token, metadata) {
    // send token to client server
  }

  handleOnExit() {
    // handle the case when your user exits Link
  }

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
            Pay Sarah Via Plaid
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Click the button below to open a list of Institutions. After you select one, you’ll be guided through an authentication process. Upon completion, a public_token will be passed back to the server and exchanged for access_token.
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <PlaidLink
              clientName="Your app name"
              env="sandbox"
              product={["auth", "transactions"]}
              publicKey="2eb18bd93120580e6e8713cbf07ee4"
              onExit={this.handleOnExit}
              onSuccess={this.handleOnSuccess}>
              Open Link and connect your bank!
            </PlaidLink>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Plaid);
