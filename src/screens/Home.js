import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ButtonGroup
              className={classes.heroButton}
              color="primary"
              variant="contained"
              size="large"
              align="center"
              aria-label="outlined primary button group">
              <Button
                align="center">
                $$$$
              </Button>
            </ButtonGroup>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
