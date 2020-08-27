import React from 'react';
import * as S from './OrderMapMarkerStyle';
import { Marker } from 'react-map-gl';
import { Images } from '../../images';

type Props = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const OrderMapMarker: React.FC<Props> = ({
  zoom,
  latitude,
  longitude,
}: Props) => {
  return (
    <Marker latitude={latitude} longitude={longitude}>
      <S.Pin zoom={zoom} src={Images.MAIN_LOGO} />
    </Marker>
  );
};

export default OrderMapMarker;
