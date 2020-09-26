import getTaro from './getTaro';
import getScroll from './getScroll';
import { RegionType, GetRegionType } from './types';

const getRegion: GetRegionType = (el, scope, options) => {
  const Taro = getTaro();
  return new Promise(resolve => {
    return Taro.createSelectorQuery()
      .in(scope)
      .select(el)
      .boundingClientRect()
      .exec(async (res: RegionType[]) => {
        const data = res[0];
        if (data) {
          // 当 hasPosition 为 true 时，假定target的位置为祖先元素的位置
          // 后面如果小程序开放了获取祖先元素的样式时，该地方可以重写
          if (options?.hasPosition) {
            data.left = 0;
            data.top = 0;
          } else {
            const scrollData = await getScroll();
            data.left += scrollData.scrollLeft;
            data.top += scrollData.scrollTop;
          }
          return resolve(data);
        }
        return resolve({
          bottom: 0,
          dataset: {},
          height: 0,
          id: '',
          left: 0,
          right: 0,
          top: 0,
          width: 0,
        });
      });
  });
};

export default getRegion;
