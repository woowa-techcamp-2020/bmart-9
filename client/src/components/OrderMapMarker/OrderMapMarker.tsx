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
  const COMPANY_LATITUDE = 37.516675;
  const COMPANY_LONGITUDE = 127.113063;
  return (
    <Marker latitude={COMPANY_LATITUDE} longitude={COMPANY_LONGITUDE}>
      <S.Pin zoom={zoom} src={Images.MAIN_LOGO} />
    </Marker>
  );
};

export default OrderMapMarker;
