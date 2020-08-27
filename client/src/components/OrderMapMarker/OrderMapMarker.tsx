import React from 'react';
import * as S from './OrderMapMarkerStyle';
import { Marker } from 'react-map-gl';
import { Images } from '../../images';

type Props = {
  latitude?: number;
  longitude?: number;
};
const COMPANY_LATITUDE = 37.516675;
const COMPANY_LONGITUDE = 127.113063;

const OrderMapMarker: React.FC<Props> = ({
  latitude = COMPANY_LATITUDE,
  longitude = COMPANY_LONGITUDE,
}: Props) => {
  return (
    <Marker latitude={latitude} longitude={longitude}>
      <S.Pin src={Images.MAIN_LOGO} />
    </Marker>
  );
};

export default OrderMapMarker;
