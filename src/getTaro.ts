import { TaroType } from './types';

export default function getTaro (): TaroType {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Taro = require('@tarojs/taro') as any;

  return Taro && (Taro as any).default || Taro;
}
