import React from 'react';
import { Route, Link } from 'react-router-dom';
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
        <Link to="/personal">基本信息</Link>
      </li>
      <li>
        <Link to="/career">个人技能</Link>
      </li>
      <li>
        <Link to="/education">教育信息</Link>
      </li>
      <li>
        <Link to="/work">工作经历</Link>
      </li>
      <li>
        <Link to="/project">项目经验</Link>
      </li>
      <li>
        <Link to="/honor">获奖经历</Link>
      </li>
      <li>
        <Link to="/interest">兴趣爱好</Link>
      </li>
      <li>
        <Link to="/self">个人寄语</Link>
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
