import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  HeartIcon
} from '__ASSETS__/SVG';
import IconButton from './IconButton';

const styles = makeStyles(theme => ({
  footer: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.footer
  },
  rights: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem'
  },
  navLink: {
    color: theme.colors.containerBackground,
    fontSize: '1.5rem',
    backgroundColor: theme.colors.transparent,
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: theme.colors.transparent
    },
    '&:focus': {
      backgroundColor: theme.colors.transparent
    }
  },
  listItem: {
    marginBottom: '1rem',
    textAlign: 'center',
    '& button': {
      color: theme.colors.white,
      marginRight: '1.5rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '1rem',
        padding: '0.5rem 1rem'
      }
    }
  }
}));

const Footer = () => {
  const classes = styles();
  return (
    <Grid container className={classes.footer}>
      <Grid className={classes.listItem}>
        <IconButton
          id="facbook-icon"
          onClick={() => {
            window.open(
              'https://www.facebook.com/jitendra.kumar.501',
              '_blank'
            );
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          id="github-icon"
          onClick={() => {
            window.open('https://github.com/JitendraBhamidipati', '_blank');
          }}
        >
          <GithubIcon />
        </IconButton>
        <IconButton
          id="instagram-icon"
          onClick={() => {
            window.open(
              'https://www.instagram.com/jitendra.bhamidipati/',
              '_blank'
            );
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          id="linkedin-icon"
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/jitendra-kumar-bhamidipati-a473b617a/',
              '_blank'
            );
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          id="twitter-icon"
          onClick={() => {
            window.open('https://twitter.com/jeetu241295', '_blank');
          }}
        >
          <TwitterIcon />
        </IconButton>
      </Grid>
      <Grid className={classes.listItem}>
        <Typography className={classes.rights} component="div" variant="h6">
          Made with <HeartIcon />. &copy; Copyright 2019 by Jitendra Kumar. All
          rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {};
export default Footer;
