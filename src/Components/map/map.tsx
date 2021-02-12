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
    <div className="horizontalCenter">
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
            width="90%"
            height="90%"
            onLoad={() => set_loading(false)}
            loading="lazy"
          ></img>
        </Zoomer>
      </div>
    </div>
  );
};

//<PS2Loader loading={loading} />
