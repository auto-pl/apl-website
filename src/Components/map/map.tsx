import React, { FC, useReducer } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import { Zoomer } from "../wrappers/zoom";
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
      <Zoomer>
        <img
          style={{ zIndex: -1 }}
          alt="Amerish"
          src={Amerish}
          width="90%"
          height="90%"
        ></img>
      </Zoomer>
    </div>
  );
};
