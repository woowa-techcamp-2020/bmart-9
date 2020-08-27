import React, { useState, useEffect } from 'react';
import * as S from './OrderMapStyle';
import ReactMapGL, { FlyToInterpolator } from 'react-map-gl';
import { OrderMapMarker } from '../OrderMapMarker';
import { BoxButton } from '../BoxButton';
import { easeCubic, easeExpIn, easeBounceInOut } from 'd3-ease';

type Props = {
  latitude: number;
  longitude: number;
};
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibmFhbW9vbm9vIiwiYSI6ImNrZDc3cDd3cTJud2wyeW15ajdnbnpxancifQ.Cfz9n6pSdx77lOZ0kU3nJQ';

const OrderMap: React.FC<Props> = ({ latitude, longitude }: Props) => {
  const [viewport, setViewport] = useState<any>({
    width: 375,
    height: 375,
    latitude,
    longitude,
    zoom: 12,
  });

  const moveTo = ({ latitude, longitude }: Props) => {
    console.log(viewport.latitude, latitude);
    setViewport({
      zoom: 12,
      latitude,
      longitude,
      transitionDuration: 10000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    });
  };
  return (
    <>
      <S.Container>
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          <OrderMapMarker
            longitude={longitude}
            latitude={latitude}
            zoom={viewport.zoom}
          />
        </ReactMapGL>

        <S.Marker
          zoom={viewport.zoom}
          src={
            'https://bmart-9.s3.ap-northeast-2.amazonaws.com/public/birds/chicbird.png'
          }
        />
      </S.Container>
      <BoxButton
        title={'Fly!!!'}
        onClickHandler={() =>
          moveTo({ latitude: latitude + 0.5, longitude: longitude + 0.5 })
        }
        width="100%"
      />
    </>
  );
};

export default OrderMap;
