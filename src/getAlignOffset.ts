import { GetAlignOffsetType } from './types';

const getAlignOffset: GetAlignOffsetType = (region, points) => {
  const V = points.charAt(0); // t
  const H = points.charAt(1); // c
  const w = region.width;
  const h = region.height;

  let x = region.left;
  let y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y,
  };
};

export default getAlignOffset;
