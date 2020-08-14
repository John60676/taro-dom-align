import {TaroType} from './types';

export default function getTaro(): TaroType {
  const Taro = require('@tarojs/taro') as any

  return Taro && (Taro as any).default || Taro
}
