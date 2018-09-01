import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGet, add, update, del } from '../actions/personalInfo';

const mapStateToProps = ({ personalInfo }) => ({
  ...personalInfo,
});

const mapDispatchToProps = dispatch => ({
  fetchGet: params => dispatch(fetchGet(params)),
  handleAdd: obj => dispatch(add(obj)),
  handleUpdate: obj => dispatch(update(obj)),
  handleDel: obj => dispatch(del(obj)),
});

class PersonalInfoPage extends React.Component {
  componentDidMount() {
    this.props.fetchGet({});
  }

  render() {
    const props = { ...this.props };
    const config = [{ displayName: '姓名', prop: 'name' },
      { displayName: '性别', prop: 'gender' },
      { displayName: '出生年月', prop: 'birthday' },
      { displayName: '政治面貌', prop: 'politicStatus' },
      { displayName: '学历', prop: 'degree' },
      { displayName: '毕业时间', prop: 'date2Work' },
      { displayName: '现居地', prop: 'presentLocus' },
      { displayName: '电话', prop: 'mobile' },
      { displayName: '邮箱', prop: 'email' },
    ];
    return (
      <div>
        个人信息：
        <br />
        {
          config.map((item, i) =>
             (<div key={i}><span>{item.displayName}：</span><span>{props[item.prop]}</span></div>))
        }
        <button onClick={() => this.props.handleAdd({ husband: '王煊' })}>新增</button>
        <button onClick={() => this.props.handleUpdate({ age: 31 })}>修改</button>
        <button onClick={() => this.props.handleDel('age')}>删除</button>
      </div>
    );
  }
}

PersonalInfoPage.defaultProps = {
};

PersonalInfoPage.propTypes = {
  // name: PropTypes.string,
  // age: PropTypes.number,
  // husband: PropTypes.string,
  fetchGet: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonalInfoPage);
