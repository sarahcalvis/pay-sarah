import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
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

class Plaid extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  connectWithPlaid() {
    var products = '<%= PLAID_PRODUCTS %>'.split(',');
    var handler = Plaid.create({
      apiVersion: 'v2',
      clientName: 'Plaid Quickstart',
      env: '<%= PLAID_ENV %>',
      product: products,
      key: '<%= PLAID_PUBLIC_KEY %>',
      countryCodes: '<%= PLAID_COUNTRY_CODES %>'.split(','),
      // webhook: 'https://your-domain.tld/plaid-webhook',
      onSuccess: function(public_token) {
        $.post('/get_access_token', {
          public_token: public_token
        }, function(data) {
          $('#container').fadeOut('fast', function() {
            $('#item_id').text(data.item_id);
            $('#access_token').text(data.access_token);
            $('#intro').hide();
            $('#app, #steps').fadeIn('slow');
          });
        });
      },
    });
    var accessToken = this.access_token;
    if (accessToken != null && accessToken != '') {
      $.post('/set_access_token', {
        access_token: accessToken
      }, function(data) {
        $('#container').fadeOut('fast', function() {
          $('#item_id').text(data.item_id);
          $('#access_token').text(accessToken);
          $('#intro').hide();
          $('#app, #steps').fadeIn('slow');
        });
      });
    }
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
          <Button 
            id="link-btn" 
            className={classes.heroButton}
            color="primary"
            variant="contained"
            size="large"
            align="center"
            onClick="this.connectWithPlaid">
            Connect with Plaid
          </Button>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Plaid);
