import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
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
            Pay Sarah
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Click the button to donate your desired amount of money to a PayPal account I made.
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="2GR89677RE6U2" />
              <input type="hidden" name="currency_code" value="USD" />
              <Button
                className={classes.heroButton}
                color="primary"
                variant="contained"
                size="large"
                align="center"
                aria-label="outlined primary button group"

                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                border="0" name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button">
                Donate
              </Button>
              {/* <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
              {/*<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />*/}
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
