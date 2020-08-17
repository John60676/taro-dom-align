import { CSSProperties } from 'react';
import Taro, { NodesRef } from '@tarojs/taro';

export type TaroType = typeof Taro;
export type RegionType = NodesRef.BoundingClientRectCallbackResult;
export type ScrollType = NodesRef.ScrollOffsetCallbackResult;
export type AlignPointsType = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';
export type OffsetType = {
  left: number;
  top: number;
};

export type DomAlignOptionOffsetType = string | number;

export type DomAlignOptionType = {
  points: [AlignPointsType, AlignPointsType];
  offset?: [DomAlignOptionOffsetType, DomAlignOptionOffsetType];
  targetOffset?: [DomAlignOptionOffsetType, DomAlignOptionOffsetType];
};

export interface GetElFuturePosType {
  (
    sourceRegion: RegionType,
    targetRegion: RegionType,
    points: DomAlignOptionType['points'],
    offset: DomAlignOptionType['offset'],
    targetOffset: DomAlignOptionType['targetOffset'],
  ): OffsetType;
}

export interface GetAlignOffsetType {
  (region: RegionType, align: AlignPointsType): OffsetType;
}

export interface SwapDisplayToHiddenType {
  (style: CSSProperties, sourceClsName: string): Promise<CSSProperties>;
}

export interface SetLeftTopType {
  (sourceRegion: RegionType, sourceStyle: CSSProperties, offset: OffsetType);
}

export interface GetRegionType {
  (elementClsName: string): Promise<RegionType>;
}

export interface DoAlignType {
  (
    sourceCls: string,
    targetCls: string,
    options: DomAlignOptionType,
    sourceStyle: CSSProperties,
    setSourceStyle: (style: CSSProperties) => void,
  ): () => void;
}

export interface UseDomAlignType {
  (sourceClsName: string, targetClsName: string, option: DomAlignOptionType): [
    CSSProperties,
    ReturnType<DoAlignType>,
    (arg: CSSProperties) => void,
  ];
}
