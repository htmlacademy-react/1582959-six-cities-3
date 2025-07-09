import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { City, OfferItem, OfferList } from '../../types/types';
import { PIN_MARKER_DEFAULT, PIN_MARKER_CURRENT, Page } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  page: Page;
  offers: OfferList;
  selectedOffer?: OfferItem | undefined;
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

function Map({ city, page, offers, selectedOffer }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        map.setView(
          {
            lat: city.location.latitude,
            lng: city.location.longitude
          });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, city]);

  return <section className={`${page}__map map`} ref={mapRef}></section>;
}

export default Map;
