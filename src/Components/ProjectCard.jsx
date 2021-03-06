import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { GithubIcon } from '__ASSETS__/SVG';
import Normal from './Fonts/Normal';
import IconButton from './IconButton';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    margin: '0 2rem 7rem 2rem',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(2rem) scale(1.05)',
      boxShadow: `0 1.5rem 3rem ${theme.colors.black2}`
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '0 2rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  avatar: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.black8
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto'
  },
  icon: {
    width: 24,
    height: 24,
    fill: theme.colors.black,
    margin: 0
  },
  contentWrap: { padding: '8px 16px', height: 90 },
  content: {
    textAlign: 'justify'
  }
}));

const ProjectCard = props => {
  const { project } = props;
  const {
    imgTitle,
    imgPath,
    projectDate,
    projectDescription,
    githubLink
  } = project;
  const classes = useStyles();
  const splitWords = imgTitle.split(' ');
  let avatarWord;
  if (splitWords.length === 1) {
    avatarWord = splitWords[0].slice(0, 2).toUpperCase();
  } else {
    avatarWord = splitWords
      .map(word => word[0].toUpperCase())
      .join('')
      .slice(0, 2);
  }

  return (
    <Card className={classes.card} raised>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            {avatarWord}
          </Avatar>
        }
        title={
          <Typography component="h6" variant="subtitle1">
            {imgTitle}
          </Typography>
        }
        subheader={
          <Typography component="div" variant="caption">
            {projectDate}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={imgPath}
        title={imgTitle}
        onClick={() => window.open(imgPath)}
      />
      <CardContent className={classes.contentWrap}>
        <Normal className={classes.content}>{projectDescription}</Normal>
      </CardContent>
      <CardActions className={classes.cardActions} disableSpacing>
        <IconButton
          id="github-link"
          onClick={() => {
            window.open(githubLink, '_blank');
          }}
        >
          <GithubIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

ProjectCard.defaultProps = {};

export default ProjectCard;
