import getTaro from './getTaro';
import { ScrollType } from './types';

export default function () {
  const Taro = getTaro();
  return new Promise<ScrollType>(resolve => {
    return Taro.createSelectorQuery()
      .selectViewport()
      .scrollOffset()
      .exec((res: ScrollType[]) => {
        resolve(res[0]);
      });
  });
};
