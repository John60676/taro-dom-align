import { GetElFuturePosType } from './types';
import getAlignOffset from './getAlignOffset';

const getElFuturePos: GetElFuturePosType = (sourceRegion, targetRegion, option) => {
  const sourcePoint = getAlignOffset(sourceRegion, option.points[0]);
  const targetPoint = getAlignOffset(targetRegion, option.points[1]);
  const diff = [sourcePoint.left - targetPoint.left, sourcePoint.top - targetPoint.top];

  return {
    left: sourceRegion.left - diff[0],
    top: sourceRegion.top - diff[1],
  };
};

export default getElFuturePos;