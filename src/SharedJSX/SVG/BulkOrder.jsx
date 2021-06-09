import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';
import styles from './styles.css';

const BulkOrderIcon = props => {
  const { className } = props;
  const classes = styles(props);
  return (
    <SvgIcon
      classes={{ root: classNames(classes.icon, className) }}
      viewBox="0 0 32 28"
      {...props}
    >
      <path d="M30 12c1.109 0 2 0.891 2 2s-0.891 2-2 2h-0.234l-1.797 10.344c-0.172 0.953-1 1.656-1.969 1.656h-20c-0.969 0-1.797-0.703-1.969-1.656l-1.797-10.344h-0.234c-1.109 0-2-0.891-2-2s0.891-2 2-2h28zM7.578 24.5c0.547-0.047 0.969-0.531 0.922-1.078l-0.5-6.5c-0.047-0.547-0.531-0.969-1.078-0.922s-0.969 0.531-0.922 1.078l0.5 6.5c0.047 0.516 0.484 0.922 1 0.922h0.078zM14 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM20 23.5v-6.5c0-0.547-0.453-1-1-1s-1 0.453-1 1v6.5c0 0.547 0.453 1 1 1s1-0.453 1-1zM25.5 23.578l0.5-6.5c0.047-0.547-0.375-1.031-0.922-1.078s-1.031 0.375-1.078 0.922l-0.5 6.5c-0.047 0.547 0.375 1.031 0.922 1.078h0.078c0.516 0 0.953-0.406 1-0.922zM7.438 4.562l-1.453 6.438h-2.063l1.578-6.891c0.406-1.828 2.016-3.109 3.891-3.109h2.609c0-0.547 0.453-1 1-1h6c0.547 0 1 0.453 1 1h2.609c1.875 0 3.484 1.281 3.891 3.109l1.578 6.891h-2.063l-1.453-6.438c-0.219-0.922-1.016-1.563-1.953-1.563h-2.609c0 0.547-0.453 1-1 1h-6c-0.547 0-1-0.453-1-1h-2.609c-0.938 0-1.734 0.641-1.953 1.563z"></path>
    </SvgIcon>
  );
};

BulkOrderIcon.propTypes = { className: PropTypes.string };
BulkOrderIcon.defaultProps = { className: null };

export default BulkOrderIcon;
