import React, { FC, useReducer } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import { MapSwitcher, to_MSContinents } from "../navigation/map_switcher";
import {
  MapContainer,
  MapContainerProps,
  MapConsumer,
  TileLayer,
  Polyline,
  useMap,
  useMapEvent,
} from "react-leaflet";

interface Continent extends ContinentDetails {
  /**
   * The URL to the view for the continent
   */
  view_url: string;
}

interface MapProps {
  continents: Array<Continent>;
}

export const Map: FC<MapProps> = (props) => {
  return (
    <MapContainer zoom={0} scrollWheelZoom={true}>
      <TileLayer url=""></TileLayer>
    </MapContainer>
  );
};
