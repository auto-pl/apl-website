import React, { FC, useReducer } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import { MapSwitcher } from "../navigation/map_switcher";
import Amerish from "../../app/Resources/Images/Maps/Amerish/LOD0.png";
import {
  MapContainer,
  TileLayerProps,
  MapConsumer,
  TileLayer,
  Polyline,
  useMap,
  useMapEvent,
} from "react-leaflet";

interface MapProps {
  continents: Array<ContinentDetails>;
  /**
   * The links to the view for each continent
   */
  view_urls: Array<string>;
}

export const Map: FC<MapProps> = (props) => {
  const views = to_continent_view(props.continents, props.view_urls);
  return (
    <div>
      <MapSwitcher continents={views} />
      <MapContainer
        center={[0, 0]}
        zoom={0}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={true}
      >
        <TileLayer url={Amerish}></TileLayer>
      </MapContainer>
    </div>
  );
};
