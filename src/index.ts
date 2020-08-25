import { useState, useScope, useRef, useMemo } from '@tarojs/taro';
import { CSSProperties } from 'react';
import { UseDomAlignType } from './types';
import doAlignFunc from './doAlign';

const useDomAlign: UseDomAlignType = (sourceClsName, targetClsName, options) => {
  const scope = useScope();
  const styleRef = useRef({});
  const [sourceStyle, setSourceStyle] = useState<CSSProperties>({ position: 'absolute', display: 'none' });
  styleRef.current = sourceStyle;
  const doAlign = useMemo(() => doAlignFunc(sourceClsName, targetClsName, options, styleRef, setSourceStyle, scope), [options, scope, sourceClsName, targetClsName]);
  const setStyle = useMemo(() => (style: CSSProperties) => setSourceStyle({
    ...styleRef.current,
    ...style,
  }), []);

  return [sourceStyle, doAlign, setStyle];
};

export default useDomAlign;
