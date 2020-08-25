import { DomAlignOptionOffsetType, DomAlignOptionType, RegionType } from './types';

export function convertOffset (offset: DomAlignOptionOffsetType, referenceLen: number) {
  if (typeof offset === 'number') {
    return offset;
  }

  let n: number;
  if (/%$/.test(offset)) {
    n = (parseInt(offset.split('%')[0], 10) / 100) * referenceLen;
  } else {
    n = parseInt(offset, 10);
  }
  return n || 0;
}

export function normalizeOffset (offset: DomAlignOptionType['offset'], referenceRegion: RegionType) {
  offset[0] = convertOffset(offset[0], referenceRegion.width);
  offset[1] = convertOffset(offset[1], referenceRegion.height);
}
