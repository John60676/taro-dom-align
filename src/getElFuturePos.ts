import { GetElFuturePosType } from './types';
import getAlignOffset from './getAlignOffset';

const getElFuturePos: GetElFuturePosType = (sourceRegion, targetRegion, points, offset, targetOffset) => {
  const sourcePoint = getAlignOffset(sourceRegion, points[0]);
  const targetPoint = getAlignOffset(targetRegion, points[1]);
  const diff = [sourcePoint.left - targetPoint.left, sourcePoint.top - targetPoint.top];

  return {
    left: sourceRegion.left - diff[0] + (offset[0] as number) - (targetOffset[0] as number),
    top: sourceRegion.top - diff[1] + (offset[1] as number) - (targetOffset[1] as number),
  };
};

export default getElFuturePos;
