import React, { FC, useState } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import { TextContainer } from "../containers/text_container";
import { PS2Loader } from "../loading/loader";
import { Zoomer } from "../wrappers/zoom";
import { MapSwitcher } from "../navigation/map_switcher";
import Amerish from "../../app/Resources/Images/Maps/Amerish/LOD0.png";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/components/map/map.css";

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
  const [error, set_error] = useState(false);
  const on_load = () => {
    set_loading(false);
    const map: HTMLElement | null = document.querySelector("#MAP_IMG");
    if (!map) return set_error(true);
    map.classList.add("map-loaded");
  };

  return (
    <div className="horizontalCenter" style={{ height: "100%", width: "100%" }}>
      <MapSwitcher continents={views} />
      <div>
        <Zoomer>
          <img
            style={{
              zIndex: -1,
            }}
            className="map"
            id="MAP_IMG"
            alt="Amerish"
            src={Amerish}
            width="50%"
            height="50%"
            onLoad={on_load}
            loading="lazy"
          ></img>
        </Zoomer>
        <PS2Loader style={{ top: "50%" }} loading={loading} />
        {error ? (
          <TextContainer>Map failed to load. Please refresh</TextContainer>
        ) : null}
      </div>
    </div>
  );
};
