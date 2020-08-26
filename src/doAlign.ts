import cloneDeep from 'lodash-es/cloneDeep';
import isEqual from 'lodash-es/isEqual';
import getTaro from './getTaro';
import swapDisplayToHidden from './swapDisplayToHidden';
import getRegion from './getRegion';
import getElFuturePos from './getElFuturePos';
import { normalizeOffset } from './utils';
import { DoAlignType } from './types';

const doAlign: DoAlignType = (sourceClsName, targetClsName, options, sourceStyleRef, setSourceStyle, scope) => {
  const Taro = getTaro();
  return async () => {
    const sourceStyle = sourceStyleRef.current;
    const newStyle = await swapDisplayToHidden(sourceStyle, sourceClsName, scope);
    isEqual(sourceStyle, newStyle) || setSourceStyle(newStyle);
    Taro.nextTick(async () => {
      const sourceRegion = await getRegion(sourceClsName, scope);
      const targetRegion = await getRegion(targetClsName, scope);
      const { points, offset = [0, 0], targetOffset = [0, 0] } = options;
      normalizeOffset(offset, sourceRegion);
      normalizeOffset(targetOffset, targetRegion);
      const result = getElFuturePos(sourceRegion, targetRegion, points, offset, targetOffset);
      const oldStyle = cloneDeep(newStyle);
      const style = cloneDeep(newStyle);
      style.display = 'inline-block';
      style.visibility = 'visible';
      style.left = result.left + 'px';
      style.top = result.top + 'px';

      // 如果修改前和修改后的样式一致，则不做更新处理
      // 此处不写也可以，taro有做对比处理
      if (!isEqual(oldStyle, style)) {
        setSourceStyle(style);
      }
    });
  };
};

export default doAlign;
