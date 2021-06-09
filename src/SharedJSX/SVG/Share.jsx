import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const ShareIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M18 16.078q1.219 0 2.063 0.867t0.844 2.039q0 1.219-0.867 2.086t-2.039 0.867-2.039-0.867-0.867-2.086q0-0.469 0.047-0.656l-7.078-4.125q-0.891 0.797-2.063 0.797-1.219 0-2.109-0.891t-0.891-2.109 0.891-2.109 2.109-0.891q1.172 0 2.063 0.797l7.031-4.078q-0.094-0.469-0.094-0.703 0-1.219 0.891-2.109t2.109-0.891 2.109 0.891 0.891 2.109-0.891 2.109-2.109 0.891q-1.125 0-2.063-0.844l-7.031 4.125q0.094 0.469 0.094 0.703t-0.094 0.703l7.125 4.125q0.844-0.75 1.969-0.75z"></path>
    </SvgIcon>
  );
};

ShareIcon.propTypes = { className: PropTypes.string };
ShareIcon.defaultProps = { className: null };

export default ShareIcon;
