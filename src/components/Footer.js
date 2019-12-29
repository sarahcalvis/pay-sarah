import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm" className={classes.footer}>
          <Typography>
            Footer
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
