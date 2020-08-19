import { useState, useScope } from '@tarojs/taro';
import { CSSProperties } from 'react';
import { UseDomAlignType } from './types';
import doAlignFunc from './doAlign';

const useDomAlign: UseDomAlignType = (sourceClsName, targetClsName, options) => {
  const scope = useScope();
  const [sourceStyle, setSourceStyle] = useState<CSSProperties>({ position: 'relative', display: 'none' });
  const doAlign = doAlignFunc(sourceClsName, targetClsName, options, sourceStyle, setSourceStyle, scope);

  const setStyle = (style: CSSProperties) => {
    setSourceStyle({
      ...sourceStyle,
      ...style,
    });
  };

  return [sourceStyle, doAlign, setStyle];
};

export default useDomAlign;
