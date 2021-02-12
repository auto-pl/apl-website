import React, { FC, useReducer, CSSProperties } from "react";
import {
  ContinentDetails,
  to_continent_view,
} from "../../interfaces/continent";
import Skeleton from "react-loading-skeleton";
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

interface MapState {
  map_loaded: boolean;
}

enum ActionType {
  LOAD_STOP,
}

const reducer = (state: MapState, action_type: ActionType) => {
  switch (action_type) {
    case ActionType.LOAD_STOP:
      const map = document.querySelector("#MAP_IMG") as HTMLElement;
      map.style.visibility = "visible";
      return { ...state, map_loaded: true };
    default:
      throw new Error("Invalid action_type");
  }
};

const initial_state: MapState = {
  map_loaded: false,
};

// TODO: style the loading screen
export const Map: FC<MapProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const views = to_continent_view(props.continents, props.view_urls);
  return (
    <div className="horizontalCenter">
      <MapSwitcher continents={views} />
      <div>
        {state.map_loaded ? null : (
          <Skeleton style={{ zIndex: -2 }} height={800} />
        )}
        <Zoomer>
          <img
            style={{
              zIndex: -1,
              visibility: "hidden",
            }}
            id="MAP_IMG"
            alt="Amerish"
            src={Amerish}
            width="90%"
            height="90%"
            onLoad={() => dispatch(ActionType.LOAD_STOP)}
          ></img>
        </Zoomer>
      </div>
    </div>
  );
};
