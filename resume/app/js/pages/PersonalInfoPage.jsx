import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { add, update, del } from '../actions/personalInfo';

const mapStateToProps = ({ personalInfo }) => ({
  ...personalInfo,
});

const mapDispatchToProps = dispatch => ({
  handleAdd: obj => dispatch(add(obj)),
  handleUpdate: obj => dispatch(update(obj)),
  handleDel: obj => dispatch(del(obj)),
});

const PersonalInfoPage = props => (
  <div>
    个人信息：
    <br />
    姓名：{props.name}
    年龄：{props.age}
    配偶：{props.husband}
    <button onClick={() => props.handleAdd({ husband: '王煊' })}>新增</button>
    <button onClick={() => props.handleUpdate({ age: 31 })}>修改</button>
    <button onClick={() => props.handleDel('age')}>删除</button>
  </div>
);

PersonalInfoPage.defaultProps = {
  age: 0,
  husband: '',
};

PersonalInfoPage.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  husband: PropTypes.string,
  handleAdd: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalInfoPage);
