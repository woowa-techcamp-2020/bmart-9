import { useCreator } from '../utils/createContext';
import { MapContexts, Location } from '../context/MapContext';
import { ViewportProps, FlyToInterpolator } from 'react-map-gl';
import { easeCubic } from 'd3-ease';
export const useMap = () => {
  const [map, dispatch] = useCreator(MapContexts);

  const onMapChanged = (viewPort: ViewportProps) => {
    dispatch({ type: 'SET_MAP', viewPort });
  };

  const moveTo = (destination: Location) => {
    const destinationViewPort = {
      ...map,
      zoom: 12,
      ...destination,
      transitionDuration: 10000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic,
    };
    dispatch({ type: 'SET_MAP', viewPort: destinationViewPort });
  };

  return { map, onMapChanged, moveTo };

  // or make custom action creator
  // const doSomething = () => dispatch({type : 'DO_SOMETHING'})

  // return { map, doSomething };
};
