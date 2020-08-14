import getTaro from './getTaro';
import getScroll from './getScroll';
import { RegionType, GetRegionType } from './types';

const getRegion: GetRegionType = el => {
  const Taro = getTaro();
  return new Promise(resolve => {
    return Taro.createSelectorQuery()
      .select(el)
      .boundingClientRect()
      .exec(async (res: RegionType[]) => {
        const data = res[0];
        if (data) {
          const scrollData = await getScroll();
          data.left += scrollData.scrollLeft;
          data.top += scrollData.scrollTop;
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
