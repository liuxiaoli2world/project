import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import CareerPrefPage from './pages/CareerPrefPage';
import EducationPage from './pages/EducationPage';
import WorkExprPage from './pages/WorkExprPage';
import ProjectExprPage from './pages/ProjectExprPage';
import HonorPage from './pages/HonorPage';
import SelfDescPage from './pages/SelfDescPage';
import InterestPage from './pages/InterestPage';

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink to="/personal" activeClassName="caaa">基本信息</NavLink>
      </li>
      <li>
        <NavLink to="/career" activeClassName="caaa">个人技能</NavLink>
      </li>
      <li>
        <NavLink to="/education" activeClassName="caaa">教育信息</NavLink>
      </li>
      <li>
        <NavLink to="/work" activeClassName="caaa">工作经历</NavLink>
      </li>
      <li>
        <NavLink to="/project" activeClassName="caaa">项目经验</NavLink>
      </li>
      <li>
        <NavLink to="/honor" activeClassName="caaa">获奖经历</NavLink>
      </li>
      <li>
        <NavLink to="/interest" activeClassName="caaa">兴趣爱好</NavLink>
      </li>
      <li>
        <NavLink to="/self" activeClassName="caaa">个人寄语</NavLink>
      </li>
    </ul>
    <Route path="/home" exact component={HomePage} />
    <Route path="/personal" component={PersonalInfoPage} />
    <Route path="/career" component={CareerPrefPage} />
    <Route path="/education" component={EducationPage} />
    <Route path="/work" component={WorkExprPage} />
    <Route path="/project" component={ProjectExprPage} />
    <Route path="/honor" component={HonorPage} />
    <Route path="/self" component={SelfDescPage} />
    <Route path="/interest" component={InterestPage} />
  </div>
);

export default App;
