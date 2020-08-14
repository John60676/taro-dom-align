import { cloneDeep } from 'lodash-es';
import getRegion from './getRegion';
import { SwapDisplayToHiddenType } from './types';

const swapDisplayToHidden: SwapDisplayToHiddenType = async (style, sourceClsName) => {
  const newStyle = cloneDeep(style);
  const sourceRegion = await getRegion(sourceClsName);
  if (sourceRegion.width === 0 || style.display === 'none') {
    newStyle.display = 'block';
    newStyle.visibility = 'hidden';
    return newStyle;
  }
  return style;
};

export default swapDisplayToHidden;
