import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { City, Point, Points } from '../../types/types';
import {PIN_MARKER_DEFAULT, PIN_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
    city: City;
    points: Points;
    selectedPoint: Point | undefined;
  };

const defaultCustomIcon = new Icon({
  iconUrl: PIN_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: PIN_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.name === selectedPoint.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <section className="cities__map map" style={{height: '512px'}} ref={mapRef}></section>;
}

export default Map;
