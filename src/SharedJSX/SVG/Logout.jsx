import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const LogoutIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon classes={{ root: classNames(classes.icon, className) }} {...props}>
      <path d="M3.984 5.016v13.969h8.016v2.016h-8.016q-0.797 0-1.383-0.609t-0.586-1.406v-13.969q0-0.797 0.586-1.406t1.383-0.609h8.016v2.016h-8.016zM17.016 6.984l4.969 5.016-4.969 5.016-1.406-1.453 2.578-2.578h-10.172v-1.969h10.172l-2.578-2.625z"></path>
    </SvgIcon>
  );
};

LogoutIcon.propTypes = { className: PropTypes.string };
LogoutIcon.defaultProps = { className: null };

export default LogoutIcon;
