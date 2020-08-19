import { cloneDeep } from 'lodash-es';
import getRegion from './getRegion';
import { SwapDisplayToHiddenType } from './types';

const swapDisplayToHidden: SwapDisplayToHiddenType = async (style, sourceClsName, scope) => {
  const newStyle = cloneDeep(style);
  const sourceRegion = await getRegion(sourceClsName, scope);
  if (sourceRegion.width === 0 || style.display === 'none') {
    newStyle.display = 'inline-block';
    newStyle.visibility = 'hidden';
    return newStyle;
  }
  return style;
};

export default swapDisplayToHidden;
