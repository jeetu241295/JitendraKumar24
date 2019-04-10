import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactPage from './ContactPage';
import * as personalWebsiteActions from '../../actions/personalWebsiteActions';

const mapStatetoProps = state => ({
  ...state.personalWebsiteReducer,
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(personalWebsiteActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchtoProps,
)(ContactPage);
