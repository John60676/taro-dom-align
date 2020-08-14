import { SetLeftTopType } from './types';
import getSourceStyle from './getSourceStyle';

const setLeftTop: SetLeftTopType = (sourceRegion, sourceStyle, offset) => {
  return {
    left: offset.left - sourceRegion.left + getSourceStyle(sourceStyle).left,
    top: offset.top - sourceRegion.top + getSourceStyle(sourceStyle).top,
  };
};

export default setLeftTop;
