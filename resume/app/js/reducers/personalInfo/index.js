import {
  ADD_PERSONAL_INFO,
  UPDATE_PERSONAL_INFO,
  DEL_PERSONAL_INFO,
} from '../../constants/actions-type';

const personalInfo = (info = {}, action) => {
  switch (action.type) {
    case ADD_PERSONAL_INFO:
      return { ...info, ...action.payload };
    case UPDATE_PERSONAL_INFO:
      return { ...info, ...action.payload };
    case DEL_PERSONAL_INFO:
      return { ...info, ...action.payload };
    default:
      return info;
  }
};
export default personalInfo;
