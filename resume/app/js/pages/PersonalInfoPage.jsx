import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ personalInfo }) => ({
  ...personalInfo,
});

// const mapDispatchToProps = dispatch => ({
//   modify: dispatch(''),
// });

const PersonalInfoPage = props => <div>个人信息<div>{props.name}</div></div>;

PersonalInfoPage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PersonalInfoPage);
