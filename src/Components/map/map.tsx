import React, { FC, useReducer } from "react";
import { ContinentDetails } from "../../interfaces/continent";
import {
  MapContainer,
  MapConsumer,
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
