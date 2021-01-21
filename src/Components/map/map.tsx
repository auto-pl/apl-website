import React, { FC, useReducer } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import { MapSwitcher } from "../navigation/map_switcher";
import Amerish from "../../app/Resources/Images/Maps/Amerish/LOD0.png";
import "../../styles/global/ps2_styles/positioning.css";

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
    <div className="horizontalCenter">
      <MapSwitcher continents={views} />
      <img
        style={{ zIndex: -1 }}
        alt="Amerish"
        src={Amerish}
        width="80%"
        height="80%"
      ></img>
    </div>
  );
};
