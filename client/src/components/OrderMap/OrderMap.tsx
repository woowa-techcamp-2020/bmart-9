import React from 'react';
import * as S from './OrderMapStyle';
import ReactMapGL from 'react-map-gl';
import { OrderMapMarker } from '../OrderMapMarker';
import { useMap } from '../../hooks/useMap';

type Props = {
  latitude: number;
  longitude: number;
  destination: {
    latitude: number;
    longitude: number;
  };
};
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ';

const OrderMap: React.FC<Props> = ({
  latitude,
  longitude,
  destination,
}: Props) => {
  const { onMapChanged, map } = useMap();

  return (
    <>
      <S.Container>
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...map}
          onViewportChange={onMapChanged}
        >
          <OrderMapMarker longitude={longitude} latitude={latitude} />
          <OrderMapMarker
            longitude={destination.longitude}
            latitude={destination.latitude}
          />
        </ReactMapGL>

        <S.Marker
          zoom={map.zoom}
          src={
            'https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/birds/chicbird.png'
          }
        />
      </S.Container>
    </>
  );
};

export default OrderMap;
