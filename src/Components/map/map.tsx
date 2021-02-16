import React, { FC, useState } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import { PS2Loader } from "../loading/loader";
import { Zoomer } from "../wrappers/zoom";
import { MapSwitcher } from "../navigation/map_switcher";
import Amerish from "../../app/Resources/Images/Maps/Amerish/LOD0.png";
import "../../styles/global/ps2_styles/positioning.css";

export interface MapProps {
  continents: Array<ContinentDetails>;
  /**
   * The links to the view for each continent
   */
  view_urls: Array<string>;
}

// TODO: style the loading screen
export const Map: FC<MapProps> = (props) => {
  const views = to_continent_view(props.continents, props.view_urls);
  const [loading, set_loading] = useState(true);
  return (
    <div className="horizontalCenter" style={{ height: "100%", width: "100%" }}>
      <MapSwitcher continents={views} />
      <div>
        <Zoomer>
          <img
            style={{
              zIndex: -1,
            }}
            id="MAP_IMG"
            alt="Amerish"
            src={Amerish}
            width="50%"
            height="50%"
            onLoad={() => set_loading(true)}
            loading="lazy"
          ></img>
        </Zoomer>
        <PS2Loader style={{ top: "50%" }} loading={loading} />
      </div>
    </div>
  );
};
