import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import styles from '../styles.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Pay Sarah
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(styles);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerRoot}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Please don't actually give money via the PayPal donate button; it's not a sandbox and I do not want to run into unexpected fees.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}