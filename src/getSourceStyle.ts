import { OffsetType } from './types';

const getSourceStyle = (sourceStyle: any): OffsetType => {
  return {
    left: sourceStyle['left'] ? Number(sourceStyle['left'].split('px')[0]) : 0,
    top: sourceStyle['top'] ? Number(sourceStyle['top'].split('px')[0]) : 0,
  };
};

export default getSourceStyle;
