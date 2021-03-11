import React, { FC, useState } from "react";
import { BaseState, ContinentDetails } from "../../interfaces/continent";
import { TextContainer } from "../containers/text_container";
import { PS2Loader } from "../loading/loader";
import { Zoomer } from "../wrappers/zoom";
import { MapSwitcher } from "../navigation/map_switcher";
import { ServerSwitcher } from "../navigation/server_switcher";
import Amerish from "../../app/Resources/Images/Maps/Amerish/LOD0.png";
import "../../styles/global/ps2_styles/positioning.css";
import "../../styles/components/map/map.css";
import { api } from "../../Utils/api_interface";

export interface MapProps {
  continents: Array<ContinentDetails>;
}

// TODO: style the loading screen
export const Map: FC<MapProps> = (props) => {
  const [loading, set_loading] = useState(true);
  const [error, set_error] = useState(false);
  const on_load = () => {
    set_loading(false);
    const map: HTMLElement | null = document.querySelector("#MAP_IMG");
    if (!map) return set_error(true);
    map.classList.add("map-loaded");
  };
  const update_hexes = (get_states: Promise<Array<BaseState>>) => {
    get_states.then((value) => console.log(value));
  };

  return (
    <div>
      <span className="left">
        <ServerSwitcher servers={api.get_all_servers()} />
      </span>
      <div
        className="horizontalCenter"
        style={{ height: "100%", width: "100%" }}
      >
        <MapSwitcher
          continents={props.continents}
          set_new_continent={(cont) => update_hexes(cont.base_states())}
        />
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
    </div>
  );
};
