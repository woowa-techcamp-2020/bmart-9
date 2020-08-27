import React from 'react';
import { contextCreator } from '../utils/createContext';
import { ViewportProps } from 'react-map-gl';

export type EssentialViewPort = Pick<
  ViewportProps,
  'width' | 'height' | 'latitude' | 'longitude' | 'zoom'
>;

export type MapState = EssentialViewPort & Partial<ViewportProps>;

export type Location = { latitude: number; longitude: number };

export type MapAction = { type: 'SET_MAP'; viewPort: MapState };

const MapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case 'SET_MAP':
      return { ...state, ...action.viewPort };
    default:
      throw new Error('존재하지 않는 액션입니다.');
  }
};

const COMPANY_LATITUDE = 37.516675;
const COMPANY_LONGITUDE = 127.113063;

const initialMap: MapState = {
  width: 375,
  height: 375,
  latitude: COMPANY_LATITUDE,
  longitude: COMPANY_LONGITUDE,
  zoom: 12,
};

export const {
  ContextProvider: MapProvider,
  Contexts: MapContexts,
} = contextCreator<MapState, MapAction>(MapReducer, initialMap);
